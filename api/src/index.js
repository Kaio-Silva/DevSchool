import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/matricula', async (req, resp) => {
    try{
        let alunos = await db.tb_matricula.findAll();
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: "Erro get sala!!" })
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let alunos = req.body;

        let conferir = await db.tb_matricula.findOne({ where: { nm_aluno: alunos.nome } })
        let (conferir != null)
            resp.send({ erro: "usuario ja existe!" })

        let r = await db.tb_matricula.create({
            nm_aluno: alunos.nome,
            nr_chamda: alunos.chamada,
            nm_curso: alunos.nm_curso,
            nm_turma: alunos.turma
        })

        resp.send(r);

    } catch (e) {
        resp.send({ erro: "Erro no post sala" })
    }
})

app.post('/matricula/:id', async (req, resp) => {
   try{
        let id = req.params;
        let nome = req.body.nome;
        let chamada = req.body.chamada;
        let curso = req.body.curso;
        let turma = req.body.turma;

        let r = await db.tb_matricula.uptade({
            nm_aluno: nome,
            nr_chamda: chamada,
            nm_curso: curso,
            nm_turma: turma
        },
        {
            where: { id_matricula: req.params.id }
        })

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: "erro post matricula!! "})
    }
})


app.listen(process.env.PORT,
            x => console.log(`Server up at Port ${process.env.PORT}`))

