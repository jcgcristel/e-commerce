const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['id','product_name','price','stock','category_id'],
        through: ProductTag
      }
    ]
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        attributes: ['id','product_name','price','stock','category_id'],
        through: ProductTag
      }
    ]
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  // expects { tag_name: 'pink' }
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (tagData[0] === 0) {res.json('No changes have been made')}
      else { 
        req.body['id'] = req.params.id;
        res.json(req.body);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json({request: 'delete', id: req.params.id});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
