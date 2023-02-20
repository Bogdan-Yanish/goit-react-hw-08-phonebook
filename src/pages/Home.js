import { Container, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const Home = () => {
    return (
        <main>
            <Container
                sx={{padding:15}}>
                <ContactPhoneIcon
                    color="primary"
                    sx={{
                        fontSize: 200,
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '10px',
                    }}
                />
                <Typography
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        font: 'italic small-caps bold 40px/2 cursive',
                        textShadow: '1px 1px 1px #1976D2, 2px 2px 1px #1976D2',
                    }}
                    >
                
                Hello, this is your personal PhoneBook.
                </Typography>
            </Container>
        </main>
    )
};

export default Home;