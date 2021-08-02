const messages = [
    "Juan",
    "Carlos",
    "Maria",
    "Juanita"
];
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}
module.exports = { randomMsg };