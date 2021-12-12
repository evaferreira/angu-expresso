var express = require('express');
var router = express.Router();

// Traigo TODAS las funciones de la API
const api = require('../api');

/* GET all books. */
router.get('/api/libros', async (req, res) => {
  const books = await api.getBooks();
  res.send(books);
});

router.get('/api/libro/:id', async (req, res) => {
  // console.log(req.params.id);
  const book = await api.getBookById(req.params.id);

  res.send(book);
});

/* GET /buscar page */
router.get('/api/buscar', async (req, res) => {
  // Conseguir lo que el usuario tipeó en el campo "titulo"
  // const titulo = req.query.titulo;
  const { titulo } = req.query;

  // Enviar titulo a la llamada de la API
  const results = await api.searchByTitle(titulo);

  res.send(results);
});

/* GET agregar page */
router.get('/agregar', async (req, res) => {
  const authors = await api.getAuthors();

  // Le envío los autores al EJS
  res.render('pages/agregar', { authors });
});

/* POST agregar libro, proceso */
/*
  REQuest -> solicitud
    req.
      params (:id)
      query  (?q=jasdlkf)
      body   (formularios con post)
*/
router.post('/agregar-libro', async (req, res) => {
  // Levantar los datos del formulario de agregar
  const { titulo, precio, portada, autor } = req.body;
  await api.addBook(titulo, precio, portada, autor);

  res.send('Vas bien!');
});

/* GET agregar autor page */
// Formulario
router.get('/agregar-autor', (req, res) => {
  res.render('pages/agregar-autor');
});

/* Puedo compartir rutas y usar métodos distintos
(GET y POST) */
// Página que procesa los datos del formulario del GET
router.post('/agregar-autor', async (req, res) => {
  // Mostrar en consola lo que tipeó el usuario
  // console.log('El usuario tipeó:', req.body.nombreCompleto);
  await api.addAuthor(req.body.nombreCompleto);

  // Conexión a la DB, enviando el nombreCompleto y agregando el reg
  res.send('Estas en la versión de POST');
});

module.exports = router;
