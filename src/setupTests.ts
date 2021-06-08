/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

