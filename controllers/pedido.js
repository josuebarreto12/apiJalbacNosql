const {response} = require("express")
const Pedido = require("../models/pedido")
const Cliente = require("../models/cliente")
const Rol = require("../models/rol")

const getPedido = async(req, res = response) => {
    
    const pedido = await Pedido.find()
    res.json({
        msg : "GET API PEDIDO ",
        pedido
    })
}
const getCliente = async(req, res = response) => {
    
    const cliente = await Cliente.find()
    res.json({
        msg : "GET API CLIENTE ",
        cliente
    })
}
const getRol = async(req, res = response) => {
    
    const rol = await Rol.find()
    res.json({
        msg : "GET API ROL ",
        rol
    })
}

const postPedido = async(req, res) => {
    const {fechaPedido, cliente, fechaEntrega, estado} = req.body
    const pedido = new Pedido({fechaPedido, cliente, fechaEntrega, estado})
    await pedido.save()
    res.json({
        msg : "GET API PEDIDO ",
        pedido
    })
}
const postCliente = async(req, res) => {
    const {documento, nombre, apellido, telefono, estado} = req.body
    const cliente = new Cliente({documento, nombre, apellido, telefono, estado})
    await cliente.save()
    res.json({
        msg : "POST API CLIENTE ",
        cliente
    })
}
const postRol = async(req, res) => {
    const {nombre, descripcion} = req.body
    const rol = new Rol({nombre, descripcion})
    await rol.save()
    res.json({
        msg : "POST API ROL ",
        rol
    })
}
const deletePedido = async(req, res) => {
    const {cliente} = req.query
    const pedido = await Pedido.findOneAndDelete({cliente : cliente})
    res.json({
        msg : "DELETE API PEDIDO",
        pedido
    })
}
const deleteCliente = async(req, res) => {
    const {documento} = req.query
    const cliente = await Cliente.findOneAndDelete({documento : documento})
    res.json({
        msg : "DELETE API CLIENTE",
        cliente
    })
}
const deleteRol = async(req, res) => {
    const {nombre} = req.query
    const rol = await Rol.findOneAndDelete({nombre : nombre})
    res.json({
        msg : "DELETE API ROL",
        rol
    })
}
const patchPedido = async(req, res) => { 
    const {cliente, fechaEntrega} = req.body
    const pedido = await Pedido.findOneAndUpdate({cliente : cliente},{fechaEntrega : fechaEntrega})
    res.json({
        msg : "PATCH API MASCOTA",
        pedido
    })
}
const patchCliente = async(req, res) => { 
    const {documento, telefono} = req.body
    const cliente = await Cliente.findOneAndUpdate({documento : documento},{telefono : telefono})
    res.json({
        msg : "PATCH API CLIENTE",
        cliente
    })
}
const patchRol = async(req, res) => { 
    const {nombre, descripcion} = req.body
    const rol = await Rol.findOneAndUpdate({nombre : nombre},{descripcion : descripcion})
    res.json({
        msg : "PATCH API ROL",
        rol
    })
}
module.exports = {
    getPedido,
    postPedido,
    getCliente,
    postCliente,
    getRol,
    postRol,
    deletePedido,
    deleteCliente,
    deleteRol,
    patchPedido,
    patchCliente,
    patchRol
}