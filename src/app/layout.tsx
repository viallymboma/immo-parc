import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.css';
import '@/css/satoshi.css';
import '@/css/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Add this import if Swiper's CSS for autoplay is needed.

// import 'swiper/modules/navigation.min.css';
// import 'swiper/modules/pagination.min.css';
// import 'swiper/modules/autoplay.min.css'; // Add this import if Swiper's CSS for autoplay is needed.
import React from 'react';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    // const [loading, setLoading] = useState<boolean>(true);
    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 1000);
    // }, []);

    return (
        <html lang="en">
            <body>
                {/* {loading ? <Loader /> : children} */}
                { children }
            </body>
        </html>
    );
}

export default RootLayout;