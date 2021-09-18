const express = require("express");
const mongoose = require("mongoose");


const menSchema = new mongoose.Schema({

  ranking: {
    type: Number,
    required: true,
    unique: true,

  },
  name:{
    type: String,
    required: true,
    trim:true
  },
  dob:{
    type: Date,
    required: true,
    trim:true
  },
  country: {
    type: String,
    required: true,
    trim:true
  },
  score: {
    type: Number,
    required: true,
    trim:true
  },
  event: {
    type: String,
    default:"100m"
  }
});

// We are creating new collection

const MensRanking = new mongoose.model("MensRanking",menSchema)


module.exports = MensRanking;