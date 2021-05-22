const router = require('express').Router();
const Post = require('../../models/Post');

router.post('/', async (req, res) => {
 try{
     const newPost = await Post.create(req.body);
     res.status(200).json(newPost);
 } catch (err) {
    res.status(400).json(err)
 }
});

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if(!postData) {
        res.status(404).json({message:'Post not found'});
    }
    res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/', async(req,res) => {
  try {
      const postData = await Post.findAll();
      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// route to find by id (PK stands for primary key)
router.get('/:id',async (req, res) => {
    Post.findByPk(req.params.id)
});

router.put('/:id', async(req,res)=> {
  try {
      if(!req.body) {
          res.status(400).json({message:'failed to update'});
      }

 const postData = await Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    }
 );
    if(!postData[0]){
        res.status(404).json({message:'Post not found'});
    }
    res.status(200).json(postData);
  } catch(err) {
      res.status(500).json(err);
  }
});
        

router.delete('/:id', async (req,res)=>{
   try {
    const postData = await Post.destroy({
        where: {
            id:req.params.id
        }
});

if(!postData){
    res.status(400).json({message:'No post found'});
    return;
}
    res.status(200).json(postData);
   } catch (err) {
       res.status(500).json(err);
   }
});

module.exports = router;