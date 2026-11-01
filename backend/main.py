from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime, timezone

app = FastAPI(
    title="SpineTwin API",
    description="Backend services for Esklash Labs SpineTwin surgical planning and simulation platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthResponse(BaseModel):
    status: str
    app: str
    version: str
    timestamp: str

class ContactSubmission(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    institution: str = Field(..., min_length=2, max_length=150)
    role: str = Field(..., min_length=2, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    received_at: str

@app.get("/health", response_model=HealthResponse)
@app.get("/api/health", response_model=HealthResponse)
def health_check():
    return HealthResponse(
        status="ok",
        app="SpineTwin API",
        version="0.1.0",
        timestamp=datetime.now(timezone.utc).isoformat(),
    )

@app.post("/api/contact", response_model=ContactResponse)
def submit_contact(payload: ContactSubmission):
    return ContactResponse(
        success=True,
        message=f"Thank you, {payload.name}. Your inquiry from {payload.institution} has been received. Our clinical engineering team will reach out within 24 hours.",
        received_at=datetime.now(timezone.utc).isoformat(),
    )
