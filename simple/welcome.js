module.exports = function (message) {

    if (NODE_ENV == 'development') {
        alert('dev');
    }

    alert(`Welcome ${message}`);
};
