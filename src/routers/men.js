const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")



// We will handel post request

router.post("/mens" , async(req,res) => {

  try{
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body);
  const insertMens = await addingMensRecord.save();
  res.status(201).send(insertMens)
  }
  catch(e){

    res.status(400).send(e)

  }
})


router.get("/", async(req,res) => {
  res.send("Hellow From the Akash")
})

// We will handel get request

router.get("/mens" , async(req,res) => {

  try{
   const getMens = await MensRanking.find({}).sort({"ranking" : 1});
  res.send(getMens)
  }
  catch(e){

    res.status(400).send(e)

  }
})


// We will handel get request of individual

router.get("/mens/:id" , async(req,res) => {

  try{
    const _id = req.params.id;
   const getMen = await MensRanking.findById(_id);
  res.send(getMen)
  }
  catch(e){

    res.status(400).send(e)

  }
})


// We will handel patch request of individual

router.patch("/mens/:id" , async(req,res) => {

  try{
    const _id = req.params.id;
   const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
     new: true
   });
  res.send(updateMen)
  }
  catch(e){

    res.status(500).send(e)

  }
})

// We will handel delete request of individual

router.delete("/mens/:id" , async(req,res) => {

  try{
   const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
  res.send(deleteMen)
  }
  catch(e){

    res.status(500).send(e)

  }
})

module.exports = router;