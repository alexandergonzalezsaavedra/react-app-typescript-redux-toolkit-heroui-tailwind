import ListOfUser from './components/tables/ListOfUsers';
import ButtonChangeTheme from './components/theme/ButtonChangeTheme';
import { useAppSelector } from './store';
const App = () => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <main className={`${theme} text-foreground bg-background min-h-dvh`}>
      <div className='container mx-auto p-4'>
        <ButtonChangeTheme />

        <div className='mt-10'>
          <ListOfUser />
        </div>
      </div>
    </main>
  );
};
export default App;
