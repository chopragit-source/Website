---
title: "Building Products with Large Language Models"
date: "2026-06-18"
excerpt: "Practical lessons from building production applications powered by LLMs — what works, what doesn't, and where the real challenges lie."
tag: "AI"
youtube: "https://www.youtube.com/watch?v=aircAruvnKk"
spotify: "https://open.spotify.com/episode/4rOoJ6Egrf8K2IrywzwOMk"
---

## Beyond the Demo

Everyone's seen the impressive ChatGPT demos. But building a production-quality LLM application is a different challenge entirely. Here's what I've learned.

### The 80/20 Problem

Getting an LLM to do something impressive takes about 20% of the effort. Getting it to do that thing *reliably* takes the other 80%. This is the fundamental tension of building with these models.

### Architecture Patterns That Work

**RAG (Retrieval Augmented Generation)** remains the most practical pattern for most applications:

- Index your domain-specific content
- Retrieve relevant context at query time
- Let the LLM synthesize an answer grounded in your data

**Agent loops** are powerful but require careful guardrails:

- Define clear tool boundaries
- Implement robust error handling
- Always have a human-in-the-loop for critical decisions

### Cost Considerations

Token costs add up fast. Strategies that help:

- Cache common responses
- Use smaller models for classification/routing
- Reserve expensive models for complex reasoning tasks
- Batch operations where possible

### What I'd Do Differently

If starting over, I'd invest more time in:

1. Evaluation frameworks from day one
2. Structured output parsing (not regex)
3. User feedback loops that actually improve the system
4. Monitoring and observability

The models will keep getting better. Your architecture should be ready to swap them out.
