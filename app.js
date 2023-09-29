const app = express();
const PORT = 3000;
app.use(express.static(path.join(___dirname, 'public')));
app.get('/', (req, res) =>{
    res.sendFile(path.join(___dirname, 'public', 'index.html'));
})
app.listen(PORT, () => {
    console.log(`server is ranning at http://localhost:${PORT}`)
})