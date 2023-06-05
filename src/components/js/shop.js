document.addEventListener("DOMContentLoaded", function () {
  const conexaoBtn = document.querySelector(".conexao-btn");
  const minecraftBtn = document.querySelector(".minecraft-btn");
  const hypixelBtn = document.querySelector(".hypixel-btn");
  const streamingBtn = document.querySelector(".streaming-btn");
  const discordBtn = document.querySelector(".discord-btn");

  const conexaoCards = document.querySelectorAll(".col-md-4.conexao");
  const minecraftCards = document.querySelectorAll(".col-md-4.minecraft");
  const hypixelCards = document.querySelectorAll(".col-md-4.hypixel");
  const streamingCards = document.querySelectorAll(".col-md-4.streaming");
  const discordCards = document.querySelectorAll(".col-md-4.discord");

  conexaoBtn.addEventListener("click", function () {
    conexaoCards.forEach((card) => {
      card.style.display = "block";
    });

    minecraftCards.forEach((card) => {
      card.style.display = "none";
    });

    hypixelCards.forEach((card) => {
      card.style.display = "none";
    });

    streamingCards.forEach((card) => {
      card.style.display = "none";
    });

    discordCards.forEach((card) => {
      card.style.display = "none";
    });

  });

  hypixelBtn.addEventListener("click", function () {
    hypixelCards.forEach((card) => {
      card.style.display = "block";
    });

    conexaoCards.forEach((card) => {
      card.style.display = "none";
    });

    minecraftCards.forEach((card) => {
      card.style.display = "none";
    });

    streamingCards.forEach((card) => {
      card.style.display = "none";
    });

    discordCards.forEach((card) => {
      card.style.display = "none";
    });

  });

  minecraftBtn.addEventListener("click", function () {
    minecraftCards.forEach((card) => {
      card.style.display = "block";
    });

    conexaoCards.forEach((card) => {
      card.style.display = "none";
    });

    hypixelCards.forEach((card) => {
      card.style.display = "none";
    });

    streamingCards.forEach((card) => {
      card.style.display = "none";
    });

    discordCards.forEach((card) => {
      card.style.display = "none";
    });

  });

  streamingBtn.addEventListener("click", function () {
    streamingCards.forEach((card) => {
      card.style.display = "block";
    });

    conexaoCards.forEach((card) => {
      card.style.display = "none";
    });

    hypixelCards.forEach((card) => {
      card.style.display = "none";
    });

    minecraftCards.forEach((card) => {
      card.style.display = "none";
    });

    discordCards.forEach((card) => {
      card.style.display = "none";
    });

  });

  discordBtn.addEventListener("click", function () {
    
    discordCards.forEach((card) => {
      card.style.display = "block";
    });
    
    streamingCards.forEach((card) => {
      card.style.display = "none";
    });

    conexaoCards.forEach((card) => {
      card.style.display = "none";
    });

    hypixelCards.forEach((card) => {
      card.style.display = "none";
    });

    minecraftCards.forEach((card) => {
      card.style.display = "none";
    });
  });

});
