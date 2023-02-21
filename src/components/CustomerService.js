import {
  Typography,
  Container,
  Card,
  Grid,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../style/customerService.css';
import { v4 as uuidv4 } from 'uuid';

const searchBarStyle = {
  display: 'flex',
};

const CustomerService = () => {
  const typesOfServices = [
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png',
        alt: 'A mailing box',
      },
      text: 'A delivery, order or return',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png',
        alt: 'Amazon Prime logo',
      },
      text: 'Prime',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png',
        alt: 'Amazon Prime logo',
      },
      text: 'Payment, charges or gift cards',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png',
        alt: 'A mailing box',
      },
      text: 'Kindle, Fire, Alexa or Other Amazon Devices',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png',
        alt: 'Amazon Prime logo',
      },
      text: 'Memberships, subscriptions or communications',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png',
        alt: 'Lock image logo',
      },
      text: 'Login, address, security & privacy',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png',
        alt: 'Lock image logo',
      },
      text: 'eBooks, Prime Videos or Music',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png',
        alt: 'Lock image logo',
      },
      text: 'Accessibility',
      path: 'somewhere/',
    },
    {
      img: {
        link: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png',
        alt: 'Lock image logo',
      },
      text: 'Something else',
      path: 'somewhere/',
    },
  ];
  return (
    <Container>
      <section className="section-1">
        <Typography variant="h4" gutterBottom>
          Welcome to e-commerce Customer service
        </Typography>
        <Typography variant="h5">
          What would you like help with today? You can quickly take care of most
          things here, or connect with us when needed.
        </Typography>

        <div className="customer-service-grid">
          {typesOfServices.map((service) => (
            <Grid item xs={4} key={uuidv4()}>
              <Link to={service.path}>
                <Card maxWidth="sm" className="flex-row">
                  <img src={service.img.link} alt={service.img.alt} />
                  <Typography variant="body1">{service.text}</Typography>
                </Card>
              </Link>
            </Grid>
          ))}
        </div>
      </section>
      <section className="section-2">
        <Typography variant="h5" gutterBottom>
          {' '}
          Search on our help library
        </Typography>
        <div className="search-bar">
          <Paper style={searchBarStyle}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Item"
              inputProps={{ 'aria-label': 'search item' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon color="primary" />
            </IconButton>
          </Paper>
        </div>
      </section>
    </Container>
  );
};

export default CustomerService;
