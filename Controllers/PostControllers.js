import mongoose from "mongoose";
import PostModel from "../Models/PostModel.js";

// creating a post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get user own all posts
export const getPostsByUser = async (req, res) => {

  const user = req.params.id

  try {
    const posts = await PostModel.find({userId: user});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get timeline post
export const getTimelinePosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a post
export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findByIdAndUpdate(postId, {
      $set: req.body,
    });
    if (post?.userId === userId) {
      res.status(200).json('Post updated!');
    }
  } catch {
    res.status(500).json(error);
  }
};


// delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted.");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  const {userId} = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post?.likes?.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId }});
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

