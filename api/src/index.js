import db from './db.js'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp) => {
    try{
        let alunos = await db.tb_matricula.findAll();

        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: `${e}` })
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let alunos = req.body;

        let conferir = await db.tb_matricula.findOne({ where: { nr_chamada: alunos.chamada } })
        if(conferir != null)
            return resp.send({ erro: "Esse aluno ja existe!!" }) 

        let r = await db.tb_matricula.create({
            nm_aluno: alunos.nome,
            nr_chamada: alunos.chamada,
            nm_curso: alunos.curso,
            nm_turma: alunos.turma
        })

        resp.send(r);

    } catch (e) {
        resp.send({ erro: `${e}` })
    }
})

app.put('/matricula/:id', async (req, resp) => {
   try{
        let alunos = req.body;

        let r = await db.tb_matricula.update({
            nm_aluno: alunos.nome,
            nr_chamda: alunos.chamada,
            nm_curso: alunos.curso,
            nm_turma: alunos.turma
        },
        {
            where: { id_matricula: req.params.id }
        })

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e}`})
    }
})

app.delete('/matricula/:id', async (req,resp) =>{
    try{
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e}` })
    }
})

app.listen(process.env.PORT,
            x => console.log(`>> Server up at Port ${process.env.PORT}`))

