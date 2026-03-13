const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(201).json({
    message: "Album created successfully",
    album,
  });
}

async function getAllMusic(req, res) {
  const musics = await musicModel.find().limit(2);

  res.status(200).json({
    message: "Musics fetched successfully",
    musics,
  });
}

async function getAllAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "username email");

  res.status(200).json({
    message: "album fetched successfully",
    albums,
  });
}

async function getAlbumById(reg, res) {
  const albumId = req.params.albumId;

  const album = await albumModel
    .findById(albumId)
    .populate("artist", "username email")
    .populate("music");
  return res.status(200).json({ message: "album fetched successfully", album });
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbums,getAlbumById };
