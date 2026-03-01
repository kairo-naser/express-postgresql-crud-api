export default function erroHandling(error, req, res, next){
    console.log("The Error is: ", error)
    res.status(500).json({
        status:500,
        message:"Something went wrong",
        error:error.message

    })
}