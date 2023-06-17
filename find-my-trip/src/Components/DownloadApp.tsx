import React from 'react'
import style from '../styles/DownloadApp.module.css'

export default function DownloadApp() {
    return (
        <div className={style.DownloadApp}>
            <div>
                <img className={style.appLogo} src='https://github.com/imSAJJAKALI/purring-root-8/assets/112471219/be02d43f-211f-4200-8208-a8f4bb0271eb' alt="logo" />
                <img src="https://cdn-useast1.kapwing.com/collections/blank_iphone_x_and_11_frame_mockup_template_ptzie_thumbnail.jpg?Expires=1687665606&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=PyBZhLq4RMJAUJf36M9EOUJIfV3gE9QfRLK5s4C%2BMNsgGCQAVwqB2eOCNYc1YtaWR9Uk39QM1A0%2F1OtImh5hQTChgRZjcX0aSVFe94I77UuIFlDYcTOprNLZ%2F%2F2UH3TJXa%2BLQCBeq%2FVgrqIeRmTtqy4u5juZJMTepo75iiFyR9vztPKyV%2FL%2FmbX2NzbtvFd7N0YUoRDiyrWg8U562%2BfkRSoz3K73L9l0e1oIjIgN0Z3WtqOgsXr6wuNdDRQdw5%2FYMcpwMY65BIYKXLW%2BcKG16HhqbQnoVt4c6T7%2BP6mYkfJWemtkplen8X7JR92UAefsYDMJ6HVgdo%2Bs4w%2F%2BMaK0bQ%3D%3D" alt="" />
            </div>
            <div className={style.headings}>
                <h2>DOWNLOAD</h2>
                <h4>Our Mobile App</h4>
                <p>This app allows travellers to find new adventures and book interesting and exciting tours</p>
                <div className={style.downloadgrid}>
                    <img src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" alt="palystore" />
                    <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG7.png" alt="QR" />
                    <img src="https://logos-download.com/wp-content/uploads/2016/06/Available_on_the_App_Store_logo.png" alt="App store" />
                </div>
                <p><b>www.FindMyTrip.com</b></p>
            </div>
        </div>
    )
}
