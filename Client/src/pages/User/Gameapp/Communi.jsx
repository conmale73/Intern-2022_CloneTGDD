import TabIcon from './TabIcon';
import Section from '~/components/Section';
import { Android, Windows } from '~/components/Icons';
import { App, Apple, TvFill } from 'react-bootstrap-icons';
function Communi(props) {
    return (
        <Section title={props.title} styles="bg-gray-50 rounded-lg p-8 my-8">
            <div className="flex justify-between w-full">
                <TabIcon firstIcon={App} name="Game iOS (iPhone-iPad)" />
                <TabIcon firstIcon={Android} name="Game Android" />
                <TabIcon firstIcon={Windows} name="Game Windows" />
                <TabIcon firstIcon={Apple} name="Game macOS" />
                <TabIcon firstIcon={TvFill} name="Game Smart TV" />
            </div>
        </Section>
    );
}

export default Communi;
