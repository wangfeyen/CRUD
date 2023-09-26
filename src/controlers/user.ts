import { Request, Response } from "express";
import { User } from "../entities/user";
import { AppDataSource } from "../database/data-source";

export const cadastrarUsuario =async(req:Request,res:Response)=>{
    
    //enviar para banco de dados
    try {
        const user=new User;
        user.Name=req.body.name;
        user.email=req.body.email;
        user.password=req.body.password;
        user.CPF=req.body.CPF;

        await AppDataSource.getTreeRepository(User).save(user);
        return res.status(201).json({ok:true})
    } catch (error) {
        console.log(error)
        return res
        .status(500)
        .json({ok:false,message:"Erro ao cadastrar o usuário"})
    }
}

export const listarUsuarios = async (req:Request,res:Response)=>{
    try {
        const users = await AppDataSource.getRepository(User).find();
        return res.status(200).json({ok:true,users:users})
    } catch (error) {
        console.log(error,"Erro ao listar usuário")
        return res
        .status(500)
        .json({ok:false,message:"Erro ao listar o usuário"})
    }
}

export const atualizarUsuarios = async(req:Request,res:Response)=>{
    const id=req.params.user_id;
    try {
        const user = await AppDataSource.getRepository(User).findOne({where:{id:parseInt(id)}});
        if(!user){
            return res.status(404).json({ok:false,message:"Não existe um usuário com esse ID"})
        }
        if(req.body.Name){
            user.Name=req.body.Name;
        }
        if(req.body.email){
            user.email=req.body.email;
        }
        if(req.body.password){
            user.password=req.body.password;
        }
        if(req.body.CPF){
            user.CPF=req.body.CPF;
        }
        await AppDataSource.getRepository(User).save(user);
        return res.status(200).json({ok:true})
    } catch (error) {
        console.log(error,"Erro ao atualizar usuário")
        return res
        .status(500)
        .json({ok:false,message:"Erro ao atulizar o usuário"})
    }
}
export const deletarUsuarios = async(req:Request,res:Response)=>{
    const id=parseInt(req.params.user_id);
    try {
        const user = await AppDataSource.getRepository(User).findOne({where:{id:id}});
        if(!user){
            return res.status(404).json({ok:false,message:"Não existe um usuário com esse ID"})
        }
       
        await AppDataSource.getRepository(User).delete(user);
        return res.status(200).json({ok:true})
    } catch (error) {
        console.log(error,"Erro ao deletar usuário")
        return res
        .status(500)
        .json({ok:false,message:"Erro ao deletar o usuário"})
    }
}