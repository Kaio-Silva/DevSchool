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
            resp.send({ erro: "Aluno ja existe!" })

        let r = await db.tb_matricula.create({
            nm_aluno: alunos.nome,
            nr_chamda: alunos.chamada,
            nm_curso: alunos.curso,
            nm_turma: alunos.turma
        })

        resp.send(r);

    } catch (e) {
        resp.send({ erro: "Erro post sala" })
    }
})

app.put('/matricula/:id', async (req, resp) => {
   try{
        let id = req.params.id;
        let alunos = req.body;

        let r = await db.tb_matricula.update({
            nm_aluno: alunos.nome,
            nr_chamda: alunos.chamada,
            nm_curso: alunos.curso,
            nm_turma: alunos.turma
        },
        {
            where: { id_matricula: id }
        })

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: "erro put matricula!! "})
    }
})

app.delete('/matricula/:id', async (req,resp) =>{
    try{
        let id = req.params.id;

        let r = await db.tb_matricula.destroy({ where: { id_matricula: id } })

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: "erro delete matricula!!" })
    }
})

app.listen(process.env.PORT,
            x => console.log(`Server up at Port ${process.env.PORT}`))

