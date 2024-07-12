const prisma =  require("../lib/config/db");

const userList =  async (req, res) => {
    try { 
        const db = await prisma.client(); 
        const result = await db.user.findMany({});
        res.status(200)  
        res.json({ 
            success: true,
            message: "List of users",
            data: result,
        }); 
    }
    catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        }); 
    } 
}

const userInfo =  async (req, res) => {
    try { 
        const { id } = req.params;

        const db = await prisma.client(); 
        const result = await db.user.findUnique({ 
            where: { 
                id: Number(id)
            } 
        });
        res.status(200)  
        res.json({ 
            success: true,
            message: "User information",
            data: result,
        }); 
    }
    catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        }); 
    } 
}

const userCreate =  async (req, res) => {
    try { 
        const { username, password, name, roleId } = req.body;

        const db = await prisma.client(); 
        const result = await db.user.create({
            data: {
                username: username,
                password: password,
                name: name,
                roleId: roleId
            }
        });
        res.status(200)  
        res.json({ 
            success: true,
            message: "User is created successfully",
            data: result
        });
    }
    catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        }); 
    } 
}

const userUpdateById =  async (req, res) => {
    try { 
        const { id } = req.params;
        const { name } = req.body;

        const db = await prisma.client(); 
        await db.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name: name
            }
        });
        res.status(200)  
        res.json({ 
            success: true,
            message: "User is updated successfully",
        });
    }
    catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        }); 
    } 
}

const userDeleteById =  async (req, res) => {
    try { 
        const { id } = req.params;
        const db = await prisma.client(); 
        await db.user.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200)  
        res.json({ 
            success: true,
            message: "User is deleted successfully",
        });
    }
    catch (err) {  
        res.status(500)  
        res.json({ 
            success: false,
            message: err.message,
        }); 
    } 
}

module.exports = {
    userList,
    userInfo,
    userCreate,
    userUpdateById,
    userDeleteById
}
