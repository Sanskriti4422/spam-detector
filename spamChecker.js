// spamChecker.js

const spamKeywords = [
  "win", "free", "click here", "subscribe", "buy now",
  "limited time", "act now", "urgent", "money", "offer"
];

function isSpam(text) {
  const lowerText = text.toLowerCase();
  return spamKeywords.some(keyword => lowerText.includes(keyword));
}

module.exports = isSpam;
