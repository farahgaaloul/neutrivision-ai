NeutriVision: Intelligent Calorie Estimation

NeutriVision is a smart nutrition tracking mobile application that estimates calories and macronutrients from food images using deep learning. The app helps users monitor daily intake, set calorie goals, and visualize dietary progress through an intuitive interface.

Project Date

May 2024

Features

Food Image Analysis
Upload or capture food images to automatically estimate calories and macronutrients using a lightweight CNN model.

AI-Powered Nutrition Estimation
Deep learning–based image classification predicts nutritional values in real time.

User Profile Management
Create and manage personalized profiles with daily calorie goals.

Meal Logging & History
Track meals, view daily intake, and analyze eating patterns over time.

Progress Visualization
Visual charts and summaries to monitor calorie consumption and nutritional balance.

Food Database Exploration
Browse food items and manage personalized diet plans.

Tech Stack
Frontend

React Native – Cross-platform mobile application development

Backend

Python

Flask – RESTful API for image processing and predictions

Machine Learning

TensorFlow – Lightweight CNN model for food image analysis

Database

SQLite – User data, meal history, and nutrition records

System Architecture

User captures or uploads a food image via the mobile app

Image is sent to the Flask backend API

CNN model processes the image and predicts calories and macronutrients

Results are returned in real time and stored in the database

User views insights, progress, and meal history through the app

Model Overview

Lightweight Convolutional Neural Network (CNN)

Optimized for mobile and real-time inference

Trained on labeled food image datasets

Outputs estimated:

Calories

Carbohydrates

Proteins

Fats


Integration with fitness trackers

Personalized meal recommendations using user behavior

