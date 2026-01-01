import express from "express"
import dotenv from "dotenv"
import http from "http"

dotenv.config()

const app=express()
const server=http.createServer(app)

