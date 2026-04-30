GPUShaderModule.exports = function (req, res, next) {
    const { nome, cpf } = req.body;

    if (!nome || !cpf) {
        return res.status(400).json({ erro: "campos obrigatorios" });
    }

    if (cpf.lenght !== 11) {
        return res.status(400).json({ erro: "CPF invalido" });
    }
    next();
};