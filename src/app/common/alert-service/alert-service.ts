import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
    providedIn: 'root'
})
export class AlertService {
    async logoutSwal() {
        return await Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        })
    }

    async deleteSwal(title) {
        return await Swal.fire({
            title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        })
    }

    async somethingWentWrong() {
        return await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }

    async success() {
        return await Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }

}