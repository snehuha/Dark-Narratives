from sqlalchemy import Column, Integer, String, Text
from database import Base

class Story(Base):
    __tablename__ = "stories"

    id = Column(Integer, primary_key=True, index=True)
    genre = Column(String)
    title = Column(String)
    content = Column(Text)