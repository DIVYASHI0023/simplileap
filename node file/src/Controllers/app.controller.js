exports.signup=async (req,res)=>{
    const { username, password } = req.body;

    try {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }

}