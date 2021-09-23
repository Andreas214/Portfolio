import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: 'left',
    boxShadow: '0px 28px 30px -25px rgba(84, 158, 242, 0.331)',
  },
  cardText: {
    paddingLeft: '10px',
  },
  header: {
    fontSize: '26px',
    fontWeight: '600',
    color: 'hsl(234, 12%, 34%)',
    padding: '10px',
    paddingBottom: '20px',
  },
  subHeader: {
    fontSize: '25px',
    fontWeight: '200',
    color: 'hsl(229, 6%, 66%)',
    paddingTop: '10px',
  },
  paragraph: {
    color: 'hsl(229, 6%, 66%)',
    fontWeight: '200',
  },
  color: {
    height: '5px',
    width: '100%',
    marginTop: '0',
  },
  grid: {
    display: 'grid',
    gridArea: '1 / 1 / 5 / 7',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridColumnGap: '40px',
    gridRowGap: '40px',
    padding: '5%',
  },
  image: {
    paddingTop: '20%',
    paddingRight: '5%',
  },
  abstand: {
    boxShadow: '0px 28px 30px -25px rgba(84, 158, 242, 0.331)',
  },
  flex: {
    height: '1200px',
    margin: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
