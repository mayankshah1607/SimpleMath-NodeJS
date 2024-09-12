const express = require("express");

const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Congratulations! Your app works! :)");
}); // comment

router.post("add", (req, res) => {
  // Add logic here
  res.send("sum can be printed here");
});
// hacktoberfest2019
router.post("/power", (req, res) => {
  let darthvader = req.body.darthvader;
  let param2 = req.body.param2;
  
  res.json({
    result: Math.pow(darthvader, param2),
    meta: {
      success: true,
      message: `Calculated ${} raised to the power ${param2}`,
      code: 200
    }
  });
});

router.post("/factorial", (req, res) => {
  const { darthvader } = req.body;

  try {
    let result = parseInt(darthvader, 10);

    if (result < 0) {
      return res.json({
        meta: {
          success: false,
          message: `${darthvader} is a negative number`,
          code: 400
        }
      });
    }
    for (let counter = result - 1; counter > 0; counter--) {
      result *= counter;
    }
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${darthvader} factorial`,
        code: 200
      }
    }); //hacktoberfest2019
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/ceil", (req, res) => {
  try {
    const { darthvader } = req.body;

    let result = Math.ceil(parseFloat(darthvader, 10));
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${darthvader} ceil`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/floor", (req, res) => {
  try{
    const { param1 } = req.body;

    let result = Math.floor(parseFloat(param1, 10));

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated ${param1} floor`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/areaOfCircle", (req, res) => {
  try{
    const { param1 } = req.body;

    let result = Math.PI * Math.pow(parseFloat(param1, 10),2);

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated area of circle with radius ${param1}`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});

router.post("/areaOfRectangle", (req, res) => {
  try{
    const { param1, param2 } = req.body;

    let result = parseFloat(param2, 10) * parseFloat(param1, 10);

    res.json({
      result,
      meta: {
        success:true,
        message: `Calculated area of rectangle with sides ${param1}`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});
// This code defines an HTTP POST route that calculates the nth root
//  of a given number, handling potential errors and responding with the
//   result or an error message in a JSON format.
router.post("/nthRoot", (req, res) => {
  try {
    const { param1, param2 } = req.body;
    const base = parseFloat(param1);
    const n = parseFloat(param2);

    if (n === 0) {
      throw new Error("Cannot calculate the 0-th root.");
    }

    const result = Math.pow(base, 1 / n);

    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated the ${n}-th root of ${param1}`,
        code: 200
      }
    });
  } catch (err) {
    res.json({
      meta: {
        success: false,
        message: err.message,
        code: 400
      }
    });
  }
});


module.exports = router;
