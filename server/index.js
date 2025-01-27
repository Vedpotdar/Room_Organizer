const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vedant",
  database: "test",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/adminLogin", (req, res) => {
  const { AdminUsername, AdminPassword } = req.body;
  connection.query(
    "SELECT * FROM adminlogins WHERE AdminUsername = ?",
    [AdminUsername],
    (err, results) => {
      if (err) {
        return res.json("Error");
      }

      if (results.length > 0) {
        const user = results[0];
        if (user.AdminPassword === AdminPassword) {
          res.json("Success");
        } else {
          res.json("Password incorrect");
        }
      } else {
        res.json("Fail");
      }
    }
  );
});

app.post("/register", (req, res) => {
  const {
    GRNno,name,username,password,email,DOB,branch,cast,fatherName,Mobile,address,PMobile,Year
  } = req.body;

 
  connection.query(
    `INSERT INTO alldata (GRNno, Name, fatherName, userName, password, mobile, address, email, branch, dob, cast, parentMob, Year ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [GRNno, name, fatherName, username, password, Mobile, address, email, branch, DOB, cast, PMobile ,Year],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json({ success: true });
    }
  )
});
app.post("/feesData", (req, res) => {
  const {
    name,Branch,Class,GrnNo,Amount
  } = req.body;

 
  connection.query(
    `INSERT INTO fees (GRNno, name, branch, class, Amount ) VALUES (?, ?, ?, ?, ?)`,
    [name,Branch,Class,GrnNo,Amount],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json({ success: true });
    }
  )
});



app.post('/login', (req, res) => {
  const { GRNno, password } = req.body;

  const query = `SELECT * FROM alldata WHERE GRNno = ?`;

  connection.query(query, [GRNno], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length > 0) {
      const user = results[0];

      if (user.password == password) {
        return res.json('Success');
      } else {
        return res.json('Password incorrect');
      }

    } else {
      return res.json('User does not exist');
    }
  });
});


app.post('/Allcapacity', (req, res) => {
  const {i} = req.body;

  const query = `SELECT * FROM roomdetails WHERE roomNum = ?`;

  connection.query(query, [i], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results)
    // if (results.length > 0) {
    //   const user = results[0];
    //   res.json(user.capacity);
    // }

    //   if (user.password == password) {
    //     return res.json('Success');
    //   } else {
    //     return res.json('Password incorrect');
    //   }

    // } else {
    //   return res.json('User does not exist');
    // }
  });
});





app.post('/roomdetails', (req, res) => {
  const {i} = req.body;

  const query = `SELECT * FROM roomdetails WHERE roomNum = ?`;

  connection.query(query, [i], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results)
    // if (results.length > 0) {
    //   const user = results[0];
    //   res.json(user.capacity);
    // }

    //   if (user.password == password) {
    //     return res.json('Success');
    //   } else {
    //     return res.json('Password incorrect');
    //   }

    // } else {
    //   return res.json('User does not exist');
    // }
  });
});


app.post("/stdone", (req, res) => {
  const {GRNno,roomnum} = req.body;
  connection.query(
    'UPDATE roomdetails SET currentCap = currentCap - 1, GRNno1 = ? WHERE roomNum = ?',
    [GRNno, roomnum],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json('Success');
    }
  )
});
app.post("/stdtwo", (req, res) => {
  const {GRNno,roomnum} = req.body;
  connection.query(
    'UPDATE roomdetails SET currentCap = currentCap - 1, GRNno2 = ? WHERE roomNum = ?',
    [GRNno, roomnum],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json('Success');
    }
  )
});
app.post("/stdthree", (req, res) => {
  const {GRNno,roomnum} = req.body;
  connection.query(
    'UPDATE roomdetails SET currentCap = currentCap - 1, GRNno3 = ? WHERE roomNum = ?',
    [GRNno, roomnum],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json('Success');
    }
  )
});
app.post("/stdfour", (req, res) => {
  const {GRNno,roomnum} = req.body;
  connection.query(
    'UPDATE roomdetails SET currentCap = currentCap - 1, GRNno4 = ? WHERE roomNum = ?',
    [GRNno, roomnum],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json('Success');
    }
  )
});
app.post("/stdfive", (req, res) => {
  const {GRNno,roomnum} = req.body;
  connection.query(
    'UPDATE roomdetails SET currentCap = currentCap - 1, GRNno5 = ? WHERE roomNum = ?',
    [GRNno, roomnum],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        console.log(err);
        return res.status(500).json({ error: "Error inserting data" });
      }
  
      console.log("Data inserted successfully:", results);
      return res.json('Success');
    }
  )
});


app.post("/allStdone", (req, res) => {
  const {StduntPath} = req.body;
  const query = `SELECT * FROM alldata WHERE GRNno = ?`;

  connection.query(query, [StduntPath], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results)
  })
});




const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
