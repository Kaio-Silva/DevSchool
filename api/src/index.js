import db from './db.js'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp) => {
    try{
        let alunos = await db.tb_matricula.findAll({ order: [['id_matricula', 'desc']] });

        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let { nome, chamada, curso, turma } = req.body;

        let conferir = await db.tb_matricula.findOne({ where: { nr_chamada: chamada, nm_turma: turma }})
        if(conferir != null)
            return resp.send({ erro: "Esse aluno ja existe!!" }) 
            
        if(nome == "" || curso == "" || turma == "")
            return resp.send({ erro: "É obrigatorio preencher os campos !!" })

        if (nome.length < 4 || curso.length < 4 || turma.length < 4)
            return resp.send({ erro: "É obrigatorio no minimo 4 caracteres !!" })


        if(chamada < 1)
            return resp.send({ erro: "Chamada invalida !!" })    


        let r = await db.tb_matricula.create({
            nm_aluno: nome,
            nr_chamada: chamada,
            nm_curso: curso,
            nm_turma: turma
        })

        resp.send(r);

    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }
})

app.put('/matricula/:id', async (req, resp) => {
   try{
        let { nome, chamada, curso, turma } = req.body;

        let r = await db.tb_matricula.update({
            nm_aluno: nome,
            nr_chamada: chamada,
            nm_curso: curso,
            nm_turma: turma
        },
        {
            where: { id_matricula: req.params.id }
        })

        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e.toString()}`})
    }
})

app.delete('/matricula/:id', async (req,resp) =>{
    try{
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: `${e.toString()}` })
    }
})

app.listen(process.env.PORT,
            x => console.log(`>> Server up at Port ${process.env.PORT}`))

