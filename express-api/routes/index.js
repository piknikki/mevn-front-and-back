const express = require('express')
const router = express.Router()
const cors = require('cors')

/* GET home page. */
router.get('/', cors(), function (req, res) {
  res.json({ message: "it's alive (things)!! πΎπΎπΎπΎπΎπΎ" })
})

router.get('/users', cors(), function (req, res) {
  res.json({
    code: 200,
    message: "user success!! π₯ π π±",
    user: {
      "id": "42",
      "firstName": "Tricia",
      "lastName": "McMillan",
      "email": "Trillian@HG2G.com"
    }
  })
})

module.exports = router

//const users = [
//   {
//     "id": "42",
//     "firstName": "Tricia",
//     "lastName": "McMillan",
//     "email": "Trillian@HG2G.com"
//   },
//   {
//     "id": "42-42",
//     "firstName": "Leia",
//     "lastName": "Organa",
//     "email": "MyOnlyHope@rebels.com"
//   }
// ]

