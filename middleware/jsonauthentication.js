import express from "express";
import jwt from "jsonwebtoken";

const middleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  const url = "http://conejo.thenexusbattlesii.online:4443";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.isValid) {
        next();
      } else {
        res.status(403).send("Invalid or expired token");
      }
    })
    .catch((error) => console.error(error));
};

module.exports = middleware;
