import iziToast from "../../node_modules/izitoast";

function alertSuccess(msg) {
    iziToast.show({
        title: "Sucesso!",
        message: msg
    });
}