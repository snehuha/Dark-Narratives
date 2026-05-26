from fastapi import FastAPI
from pydantic import BaseModel
import os

from openai import OpenAI
from dotenv import load_dotenv

from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine
from models import Base, Story

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load environment variables
load_dotenv()

# OpenRouter client
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("API_KEY"),
)

# -----------------------------
# Request Models
# -----------------------------

class SaveStoryRequest(BaseModel):
    genre: str
    title: str
    content: str

class GenerateStoryRequest(BaseModel):
    genre: str
    choice: str = ""

# -----------------------------
# Home Route
# -----------------------------

@app.get("/")
def home():
    return {"message": "Backend running"}

# -----------------------------
# Save Story Endpoint
# -----------------------------

@app.post("/stories")
def save_story(story: SaveStoryRequest):

    db = SessionLocal()

    new_story = Story(
        genre=story.genre,
        title=story.title,
        content=story.content
    )

    db.add(new_story)
    db.commit()

    return {
        "message": "Story saved"
    }

# -----------------------------
# Get Stories Endpoint
# -----------------------------

@app.get("/stories")
def get_stories():

    db = SessionLocal()

    stories = db.query(Story).all()

    return stories

# -----------------------------
# Generate AI Story Endpoint
# -----------------------------

@app.post("/generate-story")
def generate_story(req: GenerateStoryRequest):

    try:

        # Continue story
        if req.choice:

            prompt = f"""
            Continue a {req.genre} interactive story
            based on this choice:

            "{req.choice}"

            Write ONLY 3-4 lines.

            Then give exactly 3 new choices.

            Format STRICTLY like this:

            STORY:
            <story>

            CHOICES:
            1. ...
            2. ...
            3. ...
            """

        # Start story
        else:

            prompt = f"""
            Start a {req.genre} interactive story.

            Write ONLY 3-4 lines.

            Then give exactly 3 choices.

            Format STRICTLY like this:

            STORY:
            <story>

            CHOICES:
            1. ...
            2. ...
            3. ...
            """

        # AI request
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b:free",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            max_tokens=200
        )

        text = response.choices[0].message.content

        # -----------------------------
        # Parse AI response safely
        # -----------------------------

        try:

            if "CHOICES:" in text:

                parts = text.split("CHOICES:")

                story_part = parts[0]
                story_part = story_part.replace("STORY:", "").strip()

                choices_lines = parts[1].strip().split("\n")

                choices = []

                for line in choices_lines:

                    line = line.strip()

                    if line:

                        if line[0].isdigit():

                            cleaned = line[2:].strip()

                            if cleaned.startswith("."):
                                cleaned = cleaned[1:].strip()

                            choices.append(cleaned)

            else:

                story_part = text
                choices = []

        except Exception:

            story_part = text
            choices = []

        # Return structured response
        return {
            "story": story_part,
            "choices": choices
        }

    except Exception as e:

        return {
            "error": str(e)
        }