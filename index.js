import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

let daily_task = [];
let num_task = daily_task.length;
let work_task = [];
let num_work = work_task.length;

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear().toString().slice(-2);
const currentDate = month + '/' + day + '/' + year;


app.get("/", (req, res) => {
    res.render("index.ejs", {
        items: daily_task,
        daily_length: num_task,
        this_day: currentDate
    })
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        items_2: work_task,
        work_length: num_work,
        this_day: currentDate,
        checked:   checkbox.addEventListener('change', function() {
            if (this.checked) {
              checkbox.remove(this.checked);
            } 
          async: true
        }, )
    })
});



app.get("/header", (req, res) => {
    res.render("work.ejs", "index.ejs")
});

app.post("/", (req, res) => {
    const item = req.body.task;
    daily_task.push(item);
    res.redirect("/");
});

app.post("/work", (req, res) => {
    const item = req.body.task_2;
    work_task.push(item);
    res.redirect("/work")
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

