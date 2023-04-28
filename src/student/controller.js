const pool = require('../../db')


const getStudents = (req, res) =>{

    pool.query("SELECT * FROM students", (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })

    console.log('Getting students')
}


module.exports = {
    getStudents
}