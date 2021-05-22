const router = require('express').Router();
const bcrypt = require('bcrypt');
const  User= require('../../models/User');

router.post('/', async (req, res) => {
 try{
     const newUser = await User.create(req.body);
     res.status(200).json(newUser);
 } catch (err) {
    res.status(400).json(err)
 }
});

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if(!userData) {
        res.status(404).json({message:'User not found'});
    }
    res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/', async(req,res) => {
   const userData = await User.findAll();
   res.json(userData);
});

// route to find by id (PK stands for primary key)
router.get('/:id',async (req, res) => {
    User.findByPk(req.params.id)
});

router.put('/:id', async(req,res)=> {
  try {
      if(!req.body) {
          res.status(400).json({message:'failed to update'});
      }

 const userData = await User.update(req.body, {
        where: {
            id: req.params.id,
        },
        // individualHooks:true
    }
 );
    if(!userData[0]){
        res.status(404).json({message:'User not found'});
    }
    res.status(200).json(userData);
  } catch(err) {
      res.status(500).json(err);
  }
});
        

router.delete('/:id', async (req,res)=>{
   try {
    const userData = await User.destroy({
        where: {
            id:req.params.id
        }
});

if(!userData){
    res.status(400).json({message:'No User found'});
    return;
}
    res.status(200).json(userData);
   } catch (err) {
       res.status(500).json(err);
   }
});


router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne(
        {
            where:{email:req.body.email}
        }
    );

    if(!user) {
        res.status(400).json({message:'Login failed'})
    }

    const valid = await userData.checkPassword(req.body.password);
  
    if (!valid) {
        res.status(400).json({message:'Login failed'});
    }
        res.send(200).json({message:'Successfully logged in'})
    }catch(err) {
        res.status(400).json(err);
    }
});


module.exports = router;