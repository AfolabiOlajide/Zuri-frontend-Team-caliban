import { Input } from '@ui/Input';
import React from 'react';
import Pagination from '../../view-components/super-admin/pagination';
import Nav from '../../view-components/super-admin/navbar';
import Image from 'next/image';
import Link from 'next/link';
import VendorComplaint from '../../../public/assets/images/vendorComplaint.png';

type Complains = {
  id: number;
  name: string;
  email: string;
  image: any;
  complaintDescription: string;
  date: string;
  status: string;
};
const complaintsArray = [
  {
    id: 1,
    name: 'Jeffery Dahmer',
    email: 'dahmerbones@gmail.com',
    complaintDescription: 'Order Eaten',
    image: VendorComplaint,
    date: '07-09-99',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Mark Essien',
    email: 'markessien@gmail.com',
    image: VendorComplaint,
    complaintDescription: 'Bad Product',
    date: '09-07-23',
    status: 'Resolved',
  },
  {
    id: 3,
    name: 'John Kennedy',
    email: 'ken006john@yahoo.com',
    image: VendorComplaint,
    complaintDescription: 'Order not recieved',
    date: '09-07-23',
    status: 'InProgress',
  },
  {
    id: 4,
    name: 'Wesly John',
    email: 'wes24john@yahoo.com',
    image: VendorComplaint,
    complaintDescription: 'Order not recieved',
    date: '09-07-23',
    status: 'Resolved',
  },
  {
    id: 5,
    name: 'David Doe',
    email: 'dav4doe@gmail.com',
    image: VendorComplaint,
    complaintDescription: 'Order not recieved',
    date: '09-07-23',
    status: 'Resolved',
  },
  {
    id: 6,
    name: 'Shakira Madders',
    email: 'shakimad@gmail.com',
    image: VendorComplaint,
    complaintDescription: 'Bad Order',
    date: '09-07-23',
    status: 'Pending',
  },
  {
    id: 7,
    name: 'Timmy John',
    email: 'tmjohn@yahoo.com',
    image: VendorComplaint,
    complaintDescription: 'Order not available',
    date: '09-07-23',
    status: 'InProgress',
  },
  {
    id: 8,
    name: 'Wjinaldum David',
    email: 'wijdavid@ygmail.com',
    image: VendorComplaint,
    complaintDescription: 'Bad Order',
    date: '09-07-23',
    status: 'Resolved',
  },
];
export default function GeneralComplaints() {
  const [filteredComplaintsArray, setFilteredComplaintsArray] = React.useState<Complains[]>([]);
  const [filteredState, setFilteredState] = React.useState('Filter');
  React.useEffect(() => {
    if (filteredState === 'Filter') {
      let filterArray = complaintsArray.filter((complains) => complains.status);
      setFilteredComplaintsArray(filterArray);
    } else if (filteredState === 'Resolved') {
      let resolvedArray = complaintsArray.filter((complains) => complains.status === 'Resolved');
      setFilteredComplaintsArray(resolvedArray);
    } else if (filteredState === 'Pending') {
      let pendingArray = complaintsArray.filter((complains) => complains.status === 'Pending');
      setFilteredComplaintsArray(pendingArray);
    } else {
      let inProgressArray = complaintsArray.filter((complains) => complains.status === 'InProgress');
      setFilteredComplaintsArray(inProgressArray);
    }
  }, [filteredState]);
  const [searchedItem, setSearchedItem] = React.useState('');
  return (
    <>
      <Nav />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full px-16 flex justify-center items-start flex-col">
          {/* complaints overview */}
          <div className="w-full flex flex-col items-start justify-between h-42 ">
            <h1 className="font-manropeL text-2xl mb-2.5 mt-2.5  font-semibold">Complaints Overview</h1>
            <div className="w-full flex flex-row justify-between max-md:flex max-md:flex-col">
              <div className="w-96 flex flex-col justify-between p-6 items-start h-28 shadow-md rounded-lg max-lg:w-60 max-md:w-full">
                <div className="flex justify-between w-full ">
                  <h2 className="font-manropeL text-sm font-normal h-5 text-neutral-500">Resolved</h2>
                  <svg
                    className="h-5 cursor-pointer"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66797 15.8333C8.66797 16.75 9.41797 17.5 10.3346 17.5C11.2513 17.5 12.0013 16.75 12.0013 15.8333C12.0013 14.9167 11.2513 14.1667 10.3346 14.1667C9.41797 14.1667 8.66797 14.9167 8.66797 15.8333Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.66797 4.16732C8.66797 5.08398 9.41797 5.83398 10.3346 5.83398C11.2513 5.83398 12.0013 5.08398 12.0013 4.16732C12.0013 3.25065 11.2513 2.50065 10.3346 2.50065C9.41797 2.50065 8.66797 3.25065 8.66797 4.16732Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.66797 9.99935C8.66797 10.916 9.41797 11.666 10.3346 11.666C11.2513 11.666 12.0013 10.916 12.0013 9.99935C12.0013 9.08268 11.2513 8.33268 10.3346 8.33268C9.41797 8.33268 8.66797 9.08268 8.66797 9.99935Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <h1 className="h-10 text-2xl font-manropeL font-bold ">94</h1>
                  <div className="flex flex-row items-center justify-center h-6 w-16 rounded-xl bg-green-100">
                    <svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.333984" width="66" height="24" rx="12" fill="#E6F5EA" />
                      <path
                        d="M20.3804 10.3807L16.3338 6.33398L12.2871 10.3807"
                        stroke="#009254"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.334 17.6673V6.44727"
                        stroke="#009254"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.5008 17V8.299L27.6038 9.447V8.054L29.5008 6.92H30.7678V17H29.5008ZM36.8683 17.21C36.215 17.21 35.6317 17.063 35.1183 16.769C34.6097 16.4703 34.206 16.0667 33.9073 15.558C33.6133 15.0447 33.4663 14.4613 33.4663 13.808V10.112C33.4663 9.45867 33.6133 8.87533 33.9073 8.362C34.206 7.84867 34.6097 7.445 35.1183 7.151C35.6317 6.857 36.215 6.71 36.8683 6.71C37.5217 6.71 38.105 6.857 38.6183 7.151C39.1317 7.445 39.5353 7.84867 39.8293 8.362C40.1233 8.87533 40.2703 9.45867 40.2703 10.112V13.808C40.2703 14.4613 40.1233 15.0447 39.8293 15.558C39.5353 16.0667 39.1317 16.4703 38.6183 16.769C38.105 17.063 37.5217 17.21 36.8683 17.21ZM36.8683 16.013C37.265 16.013 37.6243 15.9173 37.9463 15.726C38.2683 15.5347 38.525 15.278 38.7163 14.956C38.9077 14.6293 39.0033 14.27 39.0033 13.878V10.035C39.0033 9.63833 38.9077 9.279 38.7163 8.957C38.525 8.635 38.2683 8.37833 37.9463 8.187C37.6243 7.99567 37.265 7.9 36.8683 7.9C36.4763 7.9 36.117 7.99567 35.7903 8.187C35.4683 8.37833 35.2117 8.635 35.0203 8.957C34.829 9.279 34.7333 9.63833 34.7333 10.035V13.878C34.7333 14.27 34.829 14.6293 35.0203 14.956C35.2117 15.278 35.4683 15.5347 35.7903 15.726C36.117 15.9173 36.4763 16.013 36.8683 16.013ZM43.385 17L42.545 16.16L51.799 6.92L52.639 7.76L43.385 17ZM50.539 17.21C50.077 17.21 49.6547 17.098 49.272 16.874C48.894 16.6453 48.5907 16.342 48.362 15.964C48.1333 15.5813 48.019 15.1567 48.019 14.69C48.019 14.2327 48.1357 13.8127 48.369 13.43C48.6023 13.0473 48.9103 12.7417 49.293 12.513C49.6757 12.2843 50.091 12.17 50.539 12.17C51.001 12.17 51.4233 12.2843 51.806 12.513C52.1887 12.737 52.492 13.0403 52.716 13.423C52.9447 13.801 53.059 14.2233 53.059 14.69C53.059 15.1567 52.9447 15.5813 52.716 15.964C52.492 16.342 52.1887 16.6453 51.806 16.874C51.4233 17.098 51.001 17.21 50.539 17.21ZM50.539 16.111C50.7957 16.111 51.0313 16.0457 51.246 15.915C51.4653 15.7843 51.638 15.6117 51.764 15.397C51.8947 15.1823 51.96 14.9467 51.96 14.69C51.96 14.4333 51.8947 14.1977 51.764 13.983C51.638 13.7637 51.4653 13.591 51.246 13.465C51.0313 13.3343 50.7957 13.269 50.539 13.269C50.2823 13.269 50.0467 13.3343 49.832 13.465C49.6173 13.591 49.4447 13.7637 49.314 13.983C49.1833 14.1977 49.118 14.4333 49.118 14.69C49.118 14.9467 49.1833 15.1823 49.314 15.397C49.4447 15.6117 49.6173 15.7843 49.832 15.915C50.0467 16.0457 50.2823 16.111 50.539 16.111ZM44.645 11.75C44.183 11.75 43.7607 11.638 43.378 11.414C42.9953 11.1853 42.6897 10.882 42.461 10.504C42.237 10.1213 42.125 9.69667 42.125 9.23C42.125 8.77267 42.2417 8.35267 42.475 7.97C42.7083 7.58733 43.0163 7.28167 43.399 7.053C43.7817 6.82433 44.197 6.71 44.645 6.71C45.107 6.71 45.527 6.82433 45.905 7.053C46.2877 7.277 46.5933 7.58033 46.822 7.963C47.0507 8.341 47.165 8.76333 47.165 9.23C47.165 9.69667 47.0507 10.1213 46.822 10.504C46.5933 10.882 46.2877 11.1853 45.905 11.414C45.527 11.638 45.107 11.75 44.645 11.75ZM44.645 10.651C44.9017 10.651 45.1373 10.5857 45.352 10.455C45.5713 10.3243 45.744 10.1517 45.87 9.937C46.0007 9.72233 46.066 9.48667 46.066 9.23C46.066 8.97333 46.0007 8.73767 45.87 8.523C45.744 8.30367 45.5713 8.131 45.352 8.005C45.1373 7.87433 44.9017 7.809 44.645 7.809C44.3883 7.809 44.1527 7.87433 43.938 8.005C43.7233 8.131 43.5507 8.30367 43.42 8.523C43.2893 8.73767 43.224 8.97333 43.224 9.23C43.224 9.48667 43.2893 9.72233 43.42 9.937C43.5507 10.1517 43.7233 10.3243 43.938 10.455C44.1527 10.5857 44.3883 10.651 44.645 10.651Z"
                        fill="#009254"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-96 flex flex-col justify-between p-6 items-start h-28 shadow-md rounded-lg max-lg:w-60 max-md:w-full">
                <div className="flex justify-between w-full ">
                  <h2 className="font-manropeL text-sm font-normal h-5 text-neutral-500">Pending</h2>
                  <svg
                    className="h-5 cursor-pointer"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66797 15.8333C8.66797 16.75 9.41797 17.5 10.3346 17.5C11.2513 17.5 12.0013 16.75 12.0013 15.8333C12.0013 14.9167 11.2513 14.1667 10.3346 14.1667C9.41797 14.1667 8.66797 14.9167 8.66797 15.8333Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.66797 4.16732C8.66797 5.08398 9.41797 5.83398 10.3346 5.83398C11.2513 5.83398 12.0013 5.08398 12.0013 4.16732C12.0013 3.25065 11.2513 2.50065 10.3346 2.50065C9.41797 2.50065 8.66797 3.25065 8.66797 4.16732Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.66797 9.99935C8.66797 10.916 9.41797 11.666 10.3346 11.666C11.2513 11.666 12.0013 10.916 12.0013 9.99935C12.0013 9.08268 11.2513 8.33268 10.3346 8.33268C9.41797 8.33268 8.66797 9.08268 8.66797 9.99935Z"
                      fill="#C4C7C6"
                      stroke="#C4C7C6"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <h1 className="h-10 text-2xl font-manropeL font-bold ">66</h1>
                  <div className="flex flex-row items-center justify-center h-6 w-16 rounded-xl bg-yellow-50">
                    <svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.667969" width="66" height="24" rx="12" fill="#FFF6AF" />
                      <path
                        d="M20.7144 10.3807L16.6678 6.33398L12.6211 10.3807"
                        stroke="#E5B800"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.668 17.6673V6.44727"
                        stroke="#E5B800"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.8348 17V8.299L27.9378 9.447V8.054L29.8348 6.92H31.1018V17H29.8348ZM37.2023 17.21C36.549 17.21 35.9656 17.063 35.4523 16.769C34.9436 16.4703 34.54 16.0667 34.2413 15.558C33.9473 15.0447 33.8003 14.4613 33.8003 13.808V10.112C33.8003 9.45867 33.9473 8.87533 34.2413 8.362C34.54 7.84867 34.9436 7.445 35.4523 7.151C35.9656 6.857 36.549 6.71 37.2023 6.71C37.8556 6.71 38.439 6.857 38.9523 7.151C39.4656 7.445 39.8693 7.84867 40.1633 8.362C40.4573 8.87533 40.6043 9.45867 40.6043 10.112V13.808C40.6043 14.4613 40.4573 15.0447 40.1633 15.558C39.8693 16.0667 39.4656 16.4703 38.9523 16.769C38.439 17.063 37.8556 17.21 37.2023 17.21ZM37.2023 16.013C37.599 16.013 37.9583 15.9173 38.2803 15.726C38.6023 15.5347 38.859 15.278 39.0503 14.956C39.2416 14.6293 39.3373 14.27 39.3373 13.878V10.035C39.3373 9.63833 39.2416 9.279 39.0503 8.957C38.859 8.635 38.6023 8.37833 38.2803 8.187C37.9583 7.99567 37.599 7.9 37.2023 7.9C36.8103 7.9 36.451 7.99567 36.1243 8.187C35.8023 8.37833 35.5456 8.635 35.3543 8.957C35.163 9.279 35.0673 9.63833 35.0673 10.035V13.878C35.0673 14.27 35.163 14.6293 35.3543 14.956C35.5456 15.278 35.8023 15.5347 36.1243 15.726C36.451 15.9173 36.8103 16.013 37.2023 16.013ZM43.719 17L42.879 16.16L52.133 6.92L52.973 7.76L43.719 17ZM50.873 17.21C50.411 17.21 49.9887 17.098 49.606 16.874C49.228 16.6453 48.9247 16.342 48.696 15.964C48.4673 15.5813 48.353 15.1567 48.353 14.69C48.353 14.2327 48.4697 13.8127 48.703 13.43C48.9363 13.0473 49.2443 12.7417 49.627 12.513C50.0097 12.2843 50.425 12.17 50.873 12.17C51.335 12.17 51.7573 12.2843 52.14 12.513C52.5227 12.737 52.826 13.0403 53.05 13.423C53.2787 13.801 53.393 14.2233 53.393 14.69C53.393 15.1567 53.2787 15.5813 53.05 15.964C52.826 16.342 52.5227 16.6453 52.14 16.874C51.7573 17.098 51.335 17.21 50.873 17.21ZM50.873 16.111C51.1297 16.111 51.3653 16.0457 51.58 15.915C51.7993 15.7843 51.972 15.6117 52.098 15.397C52.2287 15.1823 52.294 14.9467 52.294 14.69C52.294 14.4333 52.2287 14.1977 52.098 13.983C51.972 13.7637 51.7993 13.591 51.58 13.465C51.3653 13.3343 51.1297 13.269 50.873 13.269C50.6163 13.269 50.3807 13.3343 50.166 13.465C49.9513 13.591 49.7787 13.7637 49.648 13.983C49.5173 14.1977 49.452 14.4333 49.452 14.69C49.452 14.9467 49.5173 15.1823 49.648 15.397C49.7787 15.6117 49.9513 15.7843 50.166 15.915C50.3807 16.0457 50.6163 16.111 50.873 16.111ZM44.979 11.75C44.517 11.75 44.0947 11.638 43.712 11.414C43.3293 11.1853 43.0237 10.882 42.795 10.504C42.571 10.1213 42.459 9.69667 42.459 9.23C42.459 8.77267 42.5757 8.35267 42.809 7.97C43.0423 7.58733 43.3503 7.28167 43.733 7.053C44.1157 6.82433 44.531 6.71 44.979 6.71C45.441 6.71 45.861 6.82433 46.239 7.053C46.6217 7.277 46.9273 7.58033 47.156 7.963C47.3847 8.341 47.499 8.76333 47.499 9.23C47.499 9.69667 47.3847 10.1213 47.156 10.504C46.9273 10.882 46.6217 11.1853 46.239 11.414C45.861 11.638 45.441 11.75 44.979 11.75ZM44.979 10.651C45.2357 10.651 45.4713 10.5857 45.686 10.455C45.9053 10.3243 46.078 10.1517 46.204 9.937C46.3347 9.72233 46.4 9.48667 46.4 9.23C46.4 8.97333 46.3347 8.73767 46.204 8.523C46.078 8.30367 45.9053 8.131 45.686 8.005C45.4713 7.87433 45.2357 7.809 44.979 7.809C44.7223 7.809 44.4867 7.87433 44.272 8.005C44.0573 8.131 43.8847 8.30367 43.754 8.523C43.6233 8.73767 43.558 8.97333 43.558 9.23C43.558 9.48667 43.6233 9.72233 43.754 9.937C43.8847 10.1517 44.0573 10.3243 44.272 10.455C44.4867 10.5857 44.7223 10.651 44.979 10.651Z"
                        fill="#E5B800"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-96 flex flex-col justify-between p-6 items-start h-28 shadow-md rounded-lg max-lg:w-60 max-md:w-full">
                <div className="flex justify-between w-full ">
                  <h2 className="font-manropeL text-sm font-normal h-5 text-neutral-500">In Progress</h2>
                  <div className="relative flex flex-row">
                    <svg
                      className=" cursor-pointer h-5"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66797 15.8333C8.66797 16.75 9.41797 17.5 10.3346 17.5C11.2513 17.5 12.0013 16.75 12.0013 15.8333C12.0013 14.9167 11.2513 14.1667 10.3346 14.1667C9.41797 14.1667 8.66797 14.9167 8.66797 15.8333Z"
                        fill="#C4C7C6"
                        stroke="#C4C7C6"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8.66797 4.16732C8.66797 5.08398 9.41797 5.83398 10.3346 5.83398C11.2513 5.83398 12.0013 5.08398 12.0013 4.16732C12.0013 3.25065 11.2513 2.50065 10.3346 2.50065C9.41797 2.50065 8.66797 3.25065 8.66797 4.16732Z"
                        fill="#C4C7C6"
                        stroke="#C4C7C6"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8.66797 9.99935C8.66797 10.916 9.41797 11.666 10.3346 11.666C11.2513 11.666 12.0013 10.916 12.0013 9.99935C12.0013 9.08268 11.2513 8.33268 10.3346 8.33268C9.41797 8.33268 8.66797 9.08268 8.66797 9.99935Z"
                        fill="#C4C7C6"
                        stroke="#C4C7C6"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <h1 className="h-10 text-2xl font-manropeL font-bold ">51</h1>
                  <div className="flex flex-row items-center justify-center h-6 w-16 rounded-xl bg-blue-50">
                    <svg width="66" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <rect width="66" height="24" rx="12" fill="#C4D9FF" />
                        <path
                          d="M20.0465 10.3807L15.9998 6.33398L11.9531 10.3807"
                          stroke="#004FC4"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 17.6673V6.44727"
                          stroke="#004FC4"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.1668 17V8.299L27.2698 9.447V8.054L29.1668 6.92H30.4338V17H29.1668ZM36.5343 17.21C35.881 17.21 35.2977 17.063 34.7843 16.769C34.2757 16.4703 33.872 16.0667 33.5733 15.558C33.2793 15.0447 33.1323 14.4613 33.1323 13.808V10.112C33.1323 9.45867 33.2793 8.87533 33.5733 8.362C33.872 7.84867 34.2757 7.445 34.7843 7.151C35.2977 6.857 35.881 6.71 36.5343 6.71C37.1877 6.71 37.771 6.857 38.2843 7.151C38.7977 7.445 39.2013 7.84867 39.4953 8.362C39.7893 8.87533 39.9363 9.45867 39.9363 10.112V13.808C39.9363 14.4613 39.7893 15.0447 39.4953 15.558C39.2013 16.0667 38.7977 16.4703 38.2843 16.769C37.771 17.063 37.1877 17.21 36.5343 17.21ZM36.5343 16.013C36.931 16.013 37.2903 15.9173 37.6123 15.726C37.9343 15.5347 38.191 15.278 38.3823 14.956C38.5737 14.6293 38.6693 14.27 38.6693 13.878V10.035C38.6693 9.63833 38.5737 9.279 38.3823 8.957C38.191 8.635 37.9343 8.37833 37.6123 8.187C37.2903 7.99567 36.931 7.9 36.5343 7.9C36.1423 7.9 35.783 7.99567 35.4563 8.187C35.1343 8.37833 34.8777 8.635 34.6863 8.957C34.495 9.279 34.3993 9.63833 34.3993 10.035V13.878C34.3993 14.27 34.495 14.6293 34.6863 14.956C34.8777 15.278 35.1343 15.5347 35.4563 15.726C35.783 15.9173 36.1423 16.013 36.5343 16.013ZM43.051 17L42.211 16.16L51.465 6.92L52.305 7.76L43.051 17ZM50.205 17.21C49.743 17.21 49.3207 17.098 48.938 16.874C48.56 16.6453 48.2567 16.342 48.028 15.964C47.7993 15.5813 47.685 15.1567 47.685 14.69C47.685 14.2327 47.8017 13.8127 48.035 13.43C48.2683 13.0473 48.5763 12.7417 48.959 12.513C49.3417 12.2843 49.757 12.17 50.205 12.17C50.667 12.17 51.0893 12.2843 51.472 12.513C51.8547 12.737 52.158 13.0403 52.382 13.423C52.6107 13.801 52.725 14.2233 52.725 14.69C52.725 15.1567 52.6107 15.5813 52.382 15.964C52.158 16.342 51.8547 16.6453 51.472 16.874C51.0893 17.098 50.667 17.21 50.205 17.21ZM50.205 16.111C50.4617 16.111 50.6973 16.0457 50.912 15.915C51.1313 15.7843 51.304 15.6117 51.43 15.397C51.5607 15.1823 51.626 14.9467 51.626 14.69C51.626 14.4333 51.5607 14.1977 51.43 13.983C51.304 13.7637 51.1313 13.591 50.912 13.465C50.6973 13.3343 50.4617 13.269 50.205 13.269C49.9483 13.269 49.7127 13.3343 49.498 13.465C49.2833 13.591 49.1107 13.7637 48.98 13.983C48.8493 14.1977 48.784 14.4333 48.784 14.69C48.784 14.9467 48.8493 15.1823 48.98 15.397C49.1107 15.6117 49.2833 15.7843 49.498 15.915C49.7127 16.0457 49.9483 16.111 50.205 16.111ZM44.311 11.75C43.849 11.75 43.4267 11.638 43.044 11.414C42.6613 11.1853 42.3557 10.882 42.127 10.504C41.903 10.1213 41.791 9.69667 41.791 9.23C41.791 8.77267 41.9077 8.35267 42.141 7.97C42.3743 7.58733 42.6823 7.28167 43.065 7.053C43.4477 6.82433 43.863 6.71 44.311 6.71C44.773 6.71 45.193 6.82433 45.571 7.053C45.9537 7.277 46.2593 7.58033 46.488 7.963C46.7167 8.341 46.831 8.76333 46.831 9.23C46.831 9.69667 46.7167 10.1213 46.488 10.504C46.2593 10.882 45.9537 11.1853 45.571 11.414C45.193 11.638 44.773 11.75 44.311 11.75ZM44.311 10.651C44.5677 10.651 44.8033 10.5857 45.018 10.455C45.2373 10.3243 45.41 10.1517 45.536 9.937C45.6667 9.72233 45.732 9.48667 45.732 9.23C45.732 8.97333 45.6667 8.73767 45.536 8.523C45.41 8.30367 45.2373 8.131 45.018 8.005C44.8033 7.87433 44.5677 7.809 44.311 7.809C44.0543 7.809 43.8187 7.87433 43.604 8.005C43.3893 8.131 43.2167 8.30367 43.086 8.523C42.9553 8.73767 42.89 8.97333 42.89 9.23C42.89 9.48667 42.9553 9.72233 43.086 9.937C43.2167 10.1517 43.3893 10.3243 43.604 10.455C43.8187 10.5857 44.0543 10.651 44.311 10.651Z"
                          fill="#004FC4"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* general complaints */}
          <div className="mt-8 w-full h-auto border-2 border-zinc-200 max-md:overflow-x-scroll rounded-xl overflow-x-scroll">
            <div className="complaintHeading h-18 p-3 flex flex-row items-center max-md:flex-col max-md:items-start justify-between ">
              <div className="headerText min-w-[300px] mr-2">
                <h2 className="font-manropeL text-xl font-semibold">My Complaint</h2>
                <h3 className="font-manropeL text-base font-normal text-slate-600">
                  List of all complaint and their details
                </h3>
              </div>
              <div className="searchFunc flex flex-row max-md:mt-1.5 items-center ">
                <div className="search h-11 rounded-lg border-solid border-2 border-zinc-200 px-2 w-auto flex flex-row justify-evenly items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Input
                    type="search"
                    onChange={(e) => setSearchedItem(e.target.value)}
                    placeholder="Search"
                    className="  border-none focus:outline-none ml-1 h-6 w-96 max-md:w-56"
                  />
                </div>
                <div className="filter cursor-pointer rounded-lg ml-2 w-28 p-2.5 flex flex-row h-auto w-auto justify-center items-center border-solid border-zinc-200 border-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                      stroke="#344054"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <select
                    name=""
                    onChange={(e) => setFilteredState(e.target.value)}
                    id=""
                    className="border-none outline-none pl-2 text-slate-600 font-manropeL text-xs font-normal"
                  >
                    <option value="Filter">Filter</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Pending">Pending</option>
                    <option value="In-progress">In-progress</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="complaintList">
              <div className="tableHead border-solid border-b-2 border-t-2 max-md:w-max max-lg:w-max border-zinc-200">
                <div className="vendorComplaints p-3 flex flex-row items-center justify-between ">
                  <input className="w-6 min-w-[32px] h-5 cursor-pointer" type="checkbox" name="" id="" />
                  <div className="w-80 name flex flex-row items-center justify-start min-w-[250px]">
                    <p className=" pr-2 font-manropeL font-medium text-base text-slate-500">Name</p>
                    <svg
                      className="cursor-pointer"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00065 3.33398V12.6673M8.00065 12.6673L12.6673 8.00065M8.00065 12.6673L3.33398 8.00065"
                        stroke="#667085"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="w-40 font-manropeL flex items-center justify-center font-medium text-base text-slate-500 max-lg:min-w-[160px] min-w-[120px]">
                    Description
                  </p>
                  <p className="w-40 font-manropeL flex items-center justify-center font-medium text-base text-slate-500  min-w-[120px]">
                    Date
                  </p>
                  <p className=" w-36 font-manropeL flex items-center justify-center font-medium text-base text-slate-500  min-w-[120px]">
                    Status
                  </p>
                  <p className=" flex items-center justify-center font-manropeL min-w-[80px] font-medium text-base text-slate-500 ">
                    Action
                  </p>
                </div>
              </div>
              {searchedItem
                ? filteredComplaintsArray
                    .filter((e) => e.name.toLowerCase().includes(searchedItem.toLowerCase()))
                    .map((complains) => {
                      return (
                        <div
                          key={complains.id}
                          className="vendorComplaints p-3 flex max-md:w-max max-lg:w-max flex-row items-center justify-between border-solid border-b-2 border-zinc-200"
                        >
                          <input
                            className="w-6 h-5 cursor-pointer min-w-[32px] border-zinc-200 px"
                            type="checkbox"
                            name=""
                            id=""
                          />
                          <div className="name w-80 flex flex-row items-center min-w-[250px]">
                            <div className="displayPicture">
                              <Image
                                alt=""
                                src={complains.image}
                                className="h-10 w-10 rounded-full object-contain"
                                width={40}
                                height={40}
                              />
                              {/* <img src="" className="h-10 w-10 rounded-full object-contain" alt="" /> */}
                            </div>
                            <Link href={'/super-admin/feedback-and-customer-support/[1]'} className="identity pl-2">
                              <div>
                                <h2 className="font-manropeL font-semibold text-base">{complains.name}</h2>
                                <p className="font-manropeL text-xs font-normal text-slate-500">{complains.email}</p>
                              </div>
                            </Link>
                          </div>
                          <div className="description w-40  min-w-[120px] max-lg:min-w-[160px] flex items-center justify-center">
                            <p className="font-manropeL font-medium max-md:text-xs text-base text-slate-500">
                              {complains.complaintDescription}
                            </p>
                          </div>
                          <div className="date w-40 min-w-[120px] flex items-center justify-center">
                            <p className="font-manropeL font-medium text-base text-slate-500">{complains.date}</p>
                          </div>
                          {complains.status === 'Resolved' && (
                            <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                              <svg
                                width="80"
                                height="22"
                                viewBox="0 0 80 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="80" height="22" rx="11" fill="#ECFDF3" />
                                <circle cx="10" cy="11" r="3" fill="#12B76A" />
                                <path
                                  d="M21.0002 16V7.36H24.4142C24.4982 7.36 24.5982 7.364 24.7142 7.372C24.8302 7.376 24.9422 7.388 25.0502 7.408C25.5182 7.48 25.9102 7.64 26.2262 7.888C26.5462 8.136 26.7862 8.45 26.9462 8.83C27.1062 9.206 27.1862 9.624 27.1862 10.084C27.1862 10.752 27.0122 11.332 26.6642 11.824C26.3162 12.312 25.8062 12.618 25.1342 12.742L24.7262 12.808H22.0682V16H21.0002ZM26.1422 16L24.4382 12.484L25.4942 12.16L27.3662 16H26.1422ZM22.0682 11.794H24.3782C24.4542 11.794 24.5402 11.79 24.6362 11.782C24.7362 11.774 24.8302 11.76 24.9182 11.74C25.1942 11.676 25.4182 11.56 25.5902 11.392C25.7662 11.22 25.8942 11.02 25.9742 10.792C26.0542 10.56 26.0942 10.324 26.0942 10.084C26.0942 9.844 26.0542 9.61 25.9742 9.382C25.8942 9.15 25.7662 8.948 25.5902 8.776C25.4182 8.604 25.1942 8.488 24.9182 8.428C24.8302 8.404 24.7362 8.39 24.6362 8.386C24.5402 8.378 24.4542 8.374 24.3782 8.374H22.0682V11.794ZM31.4957 16.18C30.8597 16.18 30.3037 16.04 29.8277 15.76C29.3557 15.476 28.9877 15.082 28.7237 14.578C28.4597 14.07 28.3277 13.478 28.3277 12.802C28.3277 12.094 28.4577 11.482 28.7177 10.966C28.9777 10.446 29.3397 10.046 29.8037 9.766C30.2717 9.482 30.8197 9.34 31.4477 9.34C32.0997 9.34 32.6537 9.49 33.1097 9.79C33.5697 10.09 33.9137 10.518 34.1417 11.074C34.3737 11.63 34.4737 12.292 34.4417 13.06H33.3617V12.676C33.3497 11.88 33.1877 11.286 32.8757 10.894C32.5637 10.498 32.0997 10.3 31.4837 10.3C30.8237 10.3 30.3217 10.512 29.9777 10.936C29.6337 11.36 29.4617 11.968 29.4617 12.76C29.4617 13.524 29.6337 14.116 29.9777 14.536C30.3217 14.956 30.8117 15.166 31.4477 15.166C31.8757 15.166 32.2477 15.068 32.5637 14.872C32.8797 14.676 33.1277 14.394 33.3077 14.026L34.3337 14.38C34.0817 14.952 33.7017 15.396 33.1937 15.712C32.6897 16.024 32.1237 16.18 31.4957 16.18ZM29.1017 13.06V12.202H33.8897V13.06H29.1017ZM38.2255 16.174C37.4535 16.174 36.8195 16.006 36.3235 15.67C35.8315 15.33 35.5295 14.856 35.4175 14.248L36.5095 14.074C36.5975 14.426 36.7995 14.706 37.1155 14.914C37.4315 15.118 37.8235 15.22 38.2915 15.22C38.7355 15.22 39.0835 15.128 39.3355 14.944C39.5875 14.76 39.7135 14.51 39.7135 14.194C39.7135 14.01 39.6715 13.862 39.5875 13.75C39.5035 13.634 39.3295 13.526 39.0655 13.426C38.8055 13.326 38.4115 13.206 37.8835 13.066C37.3115 12.914 36.8615 12.756 36.5335 12.592C36.2055 12.428 35.9715 12.238 35.8315 12.022C35.6915 11.806 35.6215 11.544 35.6215 11.236C35.6215 10.856 35.7255 10.524 35.9335 10.24C36.1415 9.952 36.4315 9.73 36.8035 9.574C37.1795 9.418 37.6155 9.34 38.1115 9.34C38.6035 9.34 39.0435 9.418 39.4315 9.574C39.8195 9.73 40.1315 9.952 40.3675 10.24C40.6075 10.524 40.7495 10.856 40.7935 11.236L39.7015 11.434C39.6495 11.086 39.4815 10.812 39.1975 10.612C38.9175 10.412 38.5555 10.306 38.1115 10.294C37.6915 10.278 37.3495 10.352 37.0855 10.516C36.8255 10.68 36.6955 10.902 36.6955 11.182C36.6955 11.338 36.7435 11.472 36.8395 11.584C36.9395 11.696 37.1215 11.802 37.3855 11.902C37.6535 12.002 38.0415 12.116 38.5495 12.244C39.1215 12.388 39.5715 12.546 39.8995 12.718C40.2315 12.886 40.4675 13.086 40.6075 13.318C40.7475 13.546 40.8175 13.828 40.8175 14.164C40.8175 14.788 40.5875 15.28 40.1275 15.64C39.6675 15.996 39.0335 16.174 38.2255 16.174ZM44.9008 16.18C44.2568 16.18 43.7008 16.034 43.2328 15.742C42.7688 15.45 42.4108 15.046 42.1588 14.53C41.9068 14.014 41.7808 13.422 41.7808 12.754C41.7808 12.074 41.9088 11.478 42.1648 10.966C42.4208 10.454 42.7828 10.056 43.2508 9.772C43.7188 9.484 44.2688 9.34 44.9008 9.34C45.5488 9.34 46.1068 9.486 46.5748 9.778C47.0428 10.066 47.4008 10.468 47.6488 10.984C47.9008 11.496 48.0268 12.086 48.0268 12.754C48.0268 13.43 47.9008 14.026 47.6488 14.542C47.3968 15.054 47.0368 15.456 46.5688 15.748C46.1008 16.036 45.5448 16.18 44.9008 16.18ZM44.9008 15.166C45.5728 15.166 46.0728 14.942 46.4008 14.494C46.7288 14.046 46.8928 13.466 46.8928 12.754C46.8928 12.022 46.7268 11.44 46.3948 11.008C46.0628 10.572 45.5648 10.354 44.9008 10.354C44.4488 10.354 44.0768 10.456 43.7848 10.66C43.4928 10.864 43.2748 11.146 43.1308 11.506C42.9868 11.866 42.9148 12.282 42.9148 12.754C42.9148 13.482 43.0828 14.066 43.4188 14.506C43.7548 14.946 44.2488 15.166 44.9008 15.166ZM49.4678 16V7.18H50.5358V16H49.4678ZM54.0881 16L51.7361 9.52H52.8161L54.6341 14.638L56.4461 9.52H57.5321L55.1801 16H54.0881ZM61.191 16.18C60.555 16.18 59.999 16.04 59.523 15.76C59.051 15.476 58.683 15.082 58.419 14.578C58.155 14.07 58.023 13.478 58.023 12.802C58.023 12.094 58.153 11.482 58.413 10.966C58.673 10.446 59.035 10.046 59.499 9.766C59.967 9.482 60.515 9.34 61.143 9.34C61.795 9.34 62.349 9.49 62.805 9.79C63.265 10.09 63.609 10.518 63.837 11.074C64.069 11.63 64.169 12.292 64.137 13.06H63.057V12.676C63.045 11.88 62.883 11.286 62.571 10.894C62.259 10.498 61.795 10.3 61.179 10.3C60.519 10.3 60.017 10.512 59.673 10.936C59.329 11.36 59.157 11.968 59.157 12.76C59.157 13.524 59.329 14.116 59.673 14.536C60.017 14.956 60.507 15.166 61.143 15.166C61.571 15.166 61.943 15.068 62.259 14.872C62.575 14.676 62.823 14.394 63.003 14.026L64.029 14.38C63.777 14.952 63.397 15.396 62.889 15.712C62.385 16.024 61.819 16.18 61.191 16.18ZM58.797 13.06V12.202H63.585V13.06H58.797ZM68.0168 16.18C67.4128 16.18 66.8948 16.03 66.4628 15.73C66.0308 15.426 65.6968 15.016 65.4608 14.5C65.2288 13.984 65.1128 13.402 65.1128 12.754C65.1128 12.106 65.2288 11.524 65.4608 11.008C65.6968 10.492 66.0308 10.086 66.4628 9.79C66.8948 9.49 67.4108 9.34 68.0108 9.34C68.6228 9.34 69.1368 9.488 69.5528 9.784C69.9688 10.08 70.2828 10.486 70.4948 11.002C70.7108 11.518 70.8188 12.102 70.8188 12.754C70.8188 13.398 70.7108 13.98 70.4948 14.5C70.2828 15.016 69.9688 15.426 69.5528 15.73C69.1368 16.03 68.6248 16.18 68.0168 16.18ZM68.1488 15.202C68.5848 15.202 68.9428 15.098 69.2228 14.89C69.5028 14.678 69.7088 14.388 69.8408 14.02C69.9768 13.648 70.0448 13.226 70.0448 12.754C70.0448 12.274 69.9768 11.852 69.8408 11.488C69.7088 11.12 69.5048 10.834 69.2288 10.63C68.9528 10.422 68.6028 10.318 68.1788 10.318C67.7388 10.318 67.3748 10.426 67.0868 10.642C66.8028 10.858 66.5908 11.15 66.4508 11.518C66.3148 11.886 66.2468 12.298 66.2468 12.754C66.2468 13.214 66.3168 13.63 66.4568 14.002C66.5968 14.37 66.8068 14.662 67.0868 14.878C67.3708 15.094 67.7248 15.202 68.1488 15.202ZM70.0448 16V11.23H69.9248V7.36H70.9988V16H70.0448Z"
                                  fill="#027A48"
                                />
                              </svg>
                            </div>
                          )}
                          {complains.status === 'Pending' && (
                            <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                              <svg
                                width="76"
                                height="22"
                                viewBox="0 0 76 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <rect x="0.5" width="75" height="22" rx="11" fill="#FFFBDE" />
                                  <circle cx="10.5" cy="11" r="3" fill="#E5B800" />
                                  <path
                                    d="M21.8009 16V7.36H25.2149C25.2989 7.36 25.3989 7.364 25.5149 7.372C25.6309 7.376 25.7429 7.388 25.8509 7.408C26.3189 7.48 26.7109 7.64 27.0269 7.888C27.3469 8.136 27.5869 8.45 27.7469 8.83C27.9069 9.206 27.9869 9.624 27.9869 10.084C27.9869 10.54 27.9049 10.958 27.7409 11.338C27.5809 11.714 27.3409 12.028 27.0209 12.28C26.7049 12.528 26.3149 12.688 25.8509 12.76C25.7429 12.776 25.6309 12.788 25.5149 12.796C25.3989 12.804 25.2989 12.808 25.2149 12.808H22.8689V16H21.8009ZM22.8689 11.794H25.1789C25.2549 11.794 25.3409 11.79 25.4369 11.782C25.5369 11.774 25.6309 11.76 25.7189 11.74C25.9949 11.676 26.2189 11.56 26.3909 11.392C26.5669 11.22 26.6949 11.02 26.7749 10.792C26.8549 10.56 26.8949 10.324 26.8949 10.084C26.8949 9.844 26.8549 9.61 26.7749 9.382C26.6949 9.15 26.5669 8.948 26.3909 8.776C26.2189 8.604 25.9949 8.488 25.7189 8.428C25.6309 8.404 25.5369 8.39 25.4369 8.386C25.3409 8.378 25.2549 8.374 25.1789 8.374H22.8689V11.794ZM31.9332 16.18C31.2972 16.18 30.7412 16.04 30.2652 15.76C29.7932 15.476 29.4252 15.082 29.1612 14.578C28.8972 14.07 28.7652 13.478 28.7652 12.802C28.7652 12.094 28.8952 11.482 29.1552 10.966C29.4152 10.446 29.7772 10.046 30.2412 9.766C30.7092 9.482 31.2572 9.34 31.8852 9.34C32.5372 9.34 33.0912 9.49 33.5472 9.79C34.0072 10.09 34.3512 10.518 34.5792 11.074C34.8112 11.63 34.9112 12.292 34.8792 13.06H33.7992V12.676C33.7872 11.88 33.6252 11.286 33.3132 10.894C33.0012 10.498 32.5372 10.3 31.9212 10.3C31.2612 10.3 30.7592 10.512 30.4152 10.936C30.0712 11.36 29.8992 11.968 29.8992 12.76C29.8992 13.524 30.0712 14.116 30.4152 14.536C30.7592 14.956 31.2492 15.166 31.8852 15.166C32.3132 15.166 32.6852 15.068 33.0012 14.872C33.3172 14.676 33.5652 14.394 33.7452 14.026L34.7712 14.38C34.5192 14.952 34.1392 15.396 33.6312 15.712C33.1272 16.024 32.5612 16.18 31.9332 16.18ZM29.5392 13.06V12.202H34.3272V13.06H29.5392ZM40.6532 16V12.754C40.6532 12.446 40.6252 12.15 40.5692 11.866C40.5172 11.582 40.4232 11.328 40.2872 11.104C40.1552 10.876 39.9752 10.696 39.7472 10.564C39.5232 10.432 39.2392 10.366 38.8952 10.366C38.6272 10.366 38.3832 10.412 38.1632 10.504C37.9472 10.592 37.7612 10.728 37.6052 10.912C37.4492 11.096 37.3272 11.328 37.2392 11.608C37.1552 11.884 37.1132 12.21 37.1132 12.586L36.4112 12.37C36.4112 11.742 36.5232 11.204 36.7472 10.756C36.9752 10.304 37.2932 9.958 37.7012 9.718C38.1132 9.474 38.5972 9.352 39.1532 9.352C39.5732 9.352 39.9312 9.418 40.2272 9.55C40.5232 9.682 40.7692 9.858 40.9652 10.078C41.1612 10.294 41.3152 10.538 41.4272 10.81C41.5392 11.078 41.6172 11.352 41.6612 11.632C41.7092 11.908 41.7332 12.17 41.7332 12.418V16H40.6532ZM36.0332 16V9.52H36.9932V11.254H37.1132V16H36.0332ZM45.7785 16.18C45.1745 16.18 44.6565 16.03 44.2245 15.73C43.7925 15.426 43.4585 15.016 43.2225 14.5C42.9905 13.984 42.8745 13.402 42.8745 12.754C42.8745 12.106 42.9905 11.524 43.2225 11.008C43.4585 10.492 43.7925 10.086 44.2245 9.79C44.6565 9.49 45.1725 9.34 45.7725 9.34C46.3845 9.34 46.8985 9.488 47.3145 9.784C47.7305 10.08 48.0445 10.486 48.2565 11.002C48.4725 11.518 48.5805 12.102 48.5805 12.754C48.5805 13.398 48.4725 13.98 48.2565 14.5C48.0445 15.016 47.7305 15.426 47.3145 15.73C46.8985 16.03 46.3865 16.18 45.7785 16.18ZM45.9105 15.202C46.3465 15.202 46.7045 15.098 46.9845 14.89C47.2645 14.678 47.4705 14.388 47.6025 14.02C47.7385 13.648 47.8065 13.226 47.8065 12.754C47.8065 12.274 47.7385 11.852 47.6025 11.488C47.4705 11.12 47.2665 10.834 46.9905 10.63C46.7145 10.422 46.3645 10.318 45.9405 10.318C45.5005 10.318 45.1365 10.426 44.8485 10.642C44.5645 10.858 44.3525 11.15 44.2125 11.518C44.0765 11.886 44.0085 12.298 44.0085 12.754C44.0085 13.214 44.0785 13.63 44.2185 14.002C44.3585 14.37 44.5685 14.662 44.8485 14.878C45.1325 15.094 45.4865 15.202 45.9105 15.202ZM47.8065 16V11.23H47.6865V7.36H48.7605V16H47.8065ZM50.5616 8.374V7.27H51.6296V8.374H50.5616ZM50.5616 16V9.52H51.6296V16H50.5616ZM58.0438 16V12.754C58.0438 12.446 58.0158 12.15 57.9598 11.866C57.9078 11.582 57.8138 11.328 57.6778 11.104C57.5458 10.876 57.3658 10.696 57.1378 10.564C56.9138 10.432 56.6298 10.366 56.2858 10.366C56.0178 10.366 55.7738 10.412 55.5538 10.504C55.3378 10.592 55.1518 10.728 54.9958 10.912C54.8398 11.096 54.7178 11.328 54.6298 11.608C54.5458 11.884 54.5038 12.21 54.5038 12.586L53.8018 12.37C53.8018 11.742 53.9138 11.204 54.1378 10.756C54.3658 10.304 54.6838 9.958 55.0918 9.718C55.5038 9.474 55.9878 9.352 56.5438 9.352C56.9638 9.352 57.3218 9.418 57.6178 9.55C57.9138 9.682 58.1598 9.858 58.3558 10.078C58.5518 10.294 58.7058 10.538 58.8178 10.81C58.9298 11.078 59.0078 11.352 59.0518 11.632C59.0998 11.908 59.1238 12.17 59.1238 12.418V16H58.0438ZM53.4238 16V9.52H54.3838V11.254H54.5038V16H53.4238ZM63.3058 19.06C62.9658 19.06 62.6338 19.008 62.3098 18.904C61.9858 18.8 61.6878 18.642 61.4158 18.43C61.1478 18.222 60.9238 17.958 60.7438 17.638L61.7218 17.122C61.8818 17.438 62.1078 17.668 62.3998 17.812C62.6958 17.956 62.9998 18.028 63.3118 18.028C63.7238 18.028 64.0658 17.952 64.3378 17.8C64.6098 17.652 64.8098 17.43 64.9378 17.134C65.0698 16.838 65.1338 16.47 65.1298 16.03V14.26H65.2558V9.52H66.2038V16.042C66.2038 16.218 66.1978 16.388 66.1858 16.552C66.1778 16.716 66.1578 16.878 66.1258 17.038C66.0418 17.498 65.8758 17.876 65.6278 18.172C65.3798 18.472 65.0598 18.694 64.6678 18.838C64.2758 18.986 63.8218 19.06 63.3058 19.06ZM63.2278 16.18C62.6238 16.18 62.1058 16.03 61.6738 15.73C61.2418 15.426 60.9078 15.016 60.6718 14.5C60.4398 13.984 60.3238 13.402 60.3238 12.754C60.3238 12.106 60.4398 11.524 60.6718 11.008C60.9078 10.492 61.2418 10.086 61.6738 9.79C62.1058 9.49 62.6218 9.34 63.2218 9.34C63.8338 9.34 64.3478 9.488 64.7638 9.784C65.1798 10.08 65.4938 10.486 65.7058 11.002C65.9218 11.518 66.0298 12.102 66.0298 12.754C66.0298 13.398 65.9218 13.98 65.7058 14.5C65.4938 15.016 65.1798 15.426 64.7638 15.73C64.3478 16.03 63.8358 16.18 63.2278 16.18ZM63.3598 15.202C63.7958 15.202 64.1538 15.098 64.4338 14.89C64.7138 14.678 64.9198 14.388 65.0518 14.02C65.1878 13.648 65.2558 13.226 65.2558 12.754C65.2558 12.274 65.1878 11.852 65.0518 11.488C64.9198 11.12 64.7158 10.834 64.4398 10.63C64.1638 10.422 63.8138 10.318 63.3898 10.318C62.9498 10.318 62.5858 10.426 62.2978 10.642C62.0138 10.858 61.8018 11.15 61.6618 11.518C61.5258 11.886 61.4578 12.298 61.4578 12.754C61.4578 13.214 61.5278 13.63 61.6678 14.002C61.8078 14.37 62.0178 14.662 62.2978 14.878C62.5818 15.094 62.9358 15.202 63.3598 15.202Z"
                                    fill="#E5B800"
                                  />
                                </g>
                              </svg>
                            </div>
                          )}
                          {complains.status === 'InProgress' && (
                            <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                              <svg
                                width="96"
                                height="22"
                                viewBox="0 0 96 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="0.5" width="95" height="22" rx="11" fill="#EFF8FF" />
                                <circle cx="10.5" cy="11" r="3" fill="#2E90FA" />
                                <path
                                  d="M22.9474 6.27273V15H21.6307V6.27273H22.9474ZM26.0369 11.1136V15H24.7628V8.45455H25.9858V9.51989H26.0668C26.2173 9.1733 26.4531 8.89489 26.7741 8.68466C27.098 8.47443 27.5057 8.36932 27.9972 8.36932C28.4432 8.36932 28.8338 8.46307 29.169 8.65057C29.5043 8.83523 29.7642 9.1108 29.9489 9.47727C30.1335 9.84375 30.2259 10.2969 30.2259 10.8366V15H28.9517V10.9901C28.9517 10.5156 28.8281 10.1449 28.581 9.87784C28.3338 9.60795 27.9943 9.47301 27.5625 9.47301C27.267 9.47301 27.0043 9.53693 26.7741 9.66477C26.5469 9.79261 26.3665 9.98011 26.233 10.2273C26.1023 10.4716 26.0369 10.767 26.0369 11.1136ZM35.7912 10.7599V11.8636H31.9219V10.7599H35.7912ZM37.4893 17.4545V8.45455H38.7337V9.51562H38.8402C38.9141 9.37926 39.0206 9.22159 39.1598 9.04261C39.299 8.86364 39.4922 8.70739 39.7393 8.57386C39.9865 8.4375 40.3132 8.36932 40.7195 8.36932C41.2479 8.36932 41.7195 8.50284 42.1342 8.76989C42.549 9.03693 42.8743 9.42187 43.1101 9.92472C43.3487 10.4276 43.468 11.0327 43.468 11.7401C43.468 12.4474 43.3501 13.054 43.1143 13.5597C42.8786 14.0625 42.5547 14.4503 42.1428 14.723C41.7308 14.9929 41.2607 15.1278 40.7322 15.1278C40.3345 15.1278 40.0092 15.0611 39.7564 14.9276C39.5064 14.794 39.3104 14.6378 39.1683 14.4588C39.0263 14.2798 38.9169 14.1207 38.8402 13.9815H38.7635V17.4545H37.4893ZM38.7379 11.7273C38.7379 12.1875 38.8047 12.5909 38.9382 12.9375C39.0717 13.2841 39.2649 13.5554 39.5178 13.7514C39.7706 13.9446 40.0803 14.0412 40.4467 14.0412C40.8274 14.0412 41.1456 13.9403 41.4013 13.7386C41.657 13.5341 41.8501 13.2571 41.9808 12.9077C42.1143 12.5582 42.1811 12.1648 42.1811 11.7273C42.1811 11.2955 42.1158 10.9077 41.9851 10.5639C41.8572 10.2202 41.6641 9.94886 41.4055 9.75C41.1499 9.55114 40.8303 9.4517 40.4467 9.4517C40.0774 9.4517 39.7649 9.54687 39.5092 9.73722C39.2564 9.92756 39.0646 10.1932 38.9339 10.5341C38.8033 10.875 38.7379 11.2727 38.7379 11.7273ZM44.8956 15V8.45455H46.1271V9.49432H46.1953C46.3146 9.14205 46.5249 8.86506 46.826 8.66335C47.13 8.45881 47.4737 8.35653 47.8572 8.35653C47.9368 8.35653 48.0305 8.35937 48.1385 8.36506C48.2493 8.37074 48.3359 8.37784 48.3984 8.38636V9.60511C48.3473 9.59091 48.2564 9.57528 48.1257 9.55824C47.995 9.53835 47.8643 9.52841 47.7337 9.52841C47.4325 9.52841 47.1641 9.59233 46.9283 9.72017C46.6953 9.84517 46.5107 10.0199 46.3743 10.2443C46.2379 10.4659 46.1697 10.7187 46.1697 11.0028V15H44.8956ZM52.0238 15.1321C51.4102 15.1321 50.8746 14.9915 50.4173 14.7102C49.9599 14.429 49.6048 14.0355 49.3519 13.5298C49.0991 13.0241 48.9727 12.4332 48.9727 11.7571C48.9727 11.0781 49.0991 10.4844 49.3519 9.97585C49.6048 9.46733 49.9599 9.07244 50.4173 8.79119C50.8746 8.50994 51.4102 8.36932 52.0238 8.36932C52.6374 8.36932 53.1729 8.50994 53.6303 8.79119C54.0877 9.07244 54.4428 9.46733 54.6957 9.97585C54.9485 10.4844 55.0749 11.0781 55.0749 11.7571C55.0749 12.4332 54.9485 13.0241 54.6957 13.5298C54.4428 14.0355 54.0877 14.429 53.6303 14.7102C53.1729 14.9915 52.6374 15.1321 52.0238 15.1321ZM52.0281 14.0625C52.4258 14.0625 52.7553 13.9574 53.0167 13.7472C53.2781 13.5369 53.4712 13.2571 53.5962 12.9077C53.7241 12.5582 53.788 12.1733 53.788 11.7528C53.788 11.3352 53.7241 10.9517 53.5962 10.6023C53.4712 10.25 53.2781 9.96733 53.0167 9.75426C52.7553 9.54119 52.4258 9.43466 52.0281 9.43466C51.6275 9.43466 51.2951 9.54119 51.0309 9.75426C50.7695 9.96733 50.5749 10.25 50.4471 10.6023C50.3221 10.9517 50.2596 11.3352 50.2596 11.7528C50.2596 12.1733 50.3221 12.5582 50.4471 12.9077C50.5749 13.2571 50.7695 13.5369 51.0309 13.7472C51.2951 13.9574 51.6275 14.0625 52.0281 14.0625ZM59.2415 17.5909C58.7216 17.5909 58.2741 17.5227 57.8991 17.3864C57.527 17.25 57.223 17.0696 56.9872 16.8452C56.7514 16.6207 56.5753 16.375 56.4588 16.108L57.554 15.6562C57.6307 15.7812 57.733 15.9134 57.8608 16.0526C57.9915 16.1946 58.1676 16.3153 58.3892 16.4148C58.6136 16.5142 58.902 16.5639 59.2543 16.5639C59.7372 16.5639 60.1364 16.446 60.4517 16.2102C60.767 15.9773 60.9247 15.6051 60.9247 15.0938V13.8068H60.8438C60.767 13.946 60.6563 14.1009 60.5114 14.2713C60.3693 14.4418 60.1733 14.5895 59.9233 14.7145C59.6733 14.8395 59.348 14.902 58.9474 14.902C58.4304 14.902 57.9645 14.7812 57.5497 14.5398C57.1378 14.2955 56.8111 13.9361 56.5696 13.4616C56.331 12.9844 56.2116 12.3977 56.2116 11.7017C56.2116 11.0057 56.3295 10.4091 56.5653 9.91193C56.804 9.41477 57.1307 9.03409 57.5455 8.76989C57.9602 8.50284 58.4304 8.36932 58.956 8.36932C59.3622 8.36932 59.6903 8.4375 59.9403 8.57386C60.1903 8.70739 60.3849 8.86364 60.5241 9.04261C60.6662 9.22159 60.7756 9.37926 60.8523 9.51562H60.946V8.45455H62.1946V15.1449C62.1946 15.7074 62.0639 16.169 61.8026 16.5298C61.5412 16.8906 61.1875 17.1577 60.7415 17.331C60.2983 17.5043 59.7983 17.5909 59.2415 17.5909ZM59.2287 13.8452C59.5952 13.8452 59.9048 13.7599 60.1577 13.5895C60.4134 13.4162 60.6065 13.169 60.7372 12.848C60.8707 12.5241 60.9375 12.1364 60.9375 11.6847C60.9375 11.2443 60.8722 10.8565 60.7415 10.5213C60.6108 10.1861 60.419 9.92472 60.1662 9.73722C59.9134 9.54687 59.6009 9.4517 59.2287 9.4517C58.8452 9.4517 58.5256 9.55114 58.2699 9.75C58.0142 9.94602 57.821 10.2131 57.6903 10.5511C57.5625 10.8892 57.4986 11.267 57.4986 11.6847C57.4986 12.1136 57.5639 12.4901 57.6946 12.8139C57.8253 13.1378 58.0185 13.3906 58.2741 13.5724C58.5327 13.7543 58.8509 13.8452 59.2287 13.8452ZM63.9034 15V8.45455H65.1349V9.49432H65.2031C65.3224 9.14205 65.5327 8.86506 65.8338 8.66335C66.1378 8.45881 66.4815 8.35653 66.8651 8.35653C66.9446 8.35653 67.0384 8.35937 67.1463 8.36506C67.2571 8.37074 67.3438 8.37784 67.4062 8.38636V9.60511C67.3551 9.59091 67.2642 9.57528 67.1335 9.55824C67.0028 9.53835 66.8722 9.52841 66.7415 9.52841C66.4403 9.52841 66.1719 9.59233 65.9361 9.72017C65.7031 9.84517 65.5185 10.0199 65.3821 10.2443C65.2457 10.4659 65.1776 10.7187 65.1776 11.0028V15H63.9034ZM71.0955 15.1321C70.4506 15.1321 69.8952 14.9943 69.4293 14.7188C68.9663 14.4403 68.6083 14.0497 68.3555 13.5469C68.1055 13.0412 67.9805 12.4489 67.9805 11.7699C67.9805 11.0994 68.1055 10.5085 68.3555 9.99716C68.6083 9.4858 68.9606 9.08665 69.4123 8.79972C69.8668 8.51278 70.3981 8.36932 71.006 8.36932C71.3754 8.36932 71.7333 8.4304 72.0799 8.55256C72.4265 8.67472 72.7376 8.86648 73.0131 9.12784C73.2887 9.3892 73.506 9.72869 73.6651 10.1463C73.8242 10.5611 73.9038 11.0653 73.9038 11.6591V12.1108H68.7006V11.1562H72.6552C72.6552 10.821 72.587 10.5241 72.4506 10.2656C72.3143 10.0043 72.1225 9.7983 71.8754 9.64773C71.631 9.49716 71.3441 9.42188 71.0146 9.42188C70.6566 9.42188 70.3441 9.50994 70.0771 9.68608C69.8129 9.85937 69.6083 10.0866 69.4634 10.3679C69.3214 10.6463 69.2504 10.9489 69.2504 11.2756V12.0213C69.2504 12.4588 69.3271 12.831 69.4805 13.1378C69.6367 13.4446 69.854 13.679 70.1325 13.8409C70.4109 14 70.7362 14.0795 71.1083 14.0795C71.3498 14.0795 71.57 14.0455 71.7688 13.9773C71.9677 13.9062 72.1396 13.8011 72.2844 13.6619C72.4293 13.5227 72.5401 13.3509 72.6168 13.1463L73.8228 13.3636C73.7262 13.7187 73.5529 14.0298 73.3029 14.2969C73.0558 14.5611 72.7447 14.767 72.3697 14.9148C71.9975 15.0597 71.5728 15.1321 71.0955 15.1321ZM80.2223 10.0526L79.0675 10.2571C79.0192 10.1094 78.9425 9.96875 78.8374 9.83523C78.7351 9.7017 78.5959 9.59233 78.4197 9.5071C78.2436 9.42187 78.0234 9.37926 77.7592 9.37926C77.3984 9.37926 77.0973 9.46023 76.8558 9.62216C76.6143 9.78125 76.4936 9.98722 76.4936 10.2401C76.4936 10.4588 76.5746 10.6349 76.7365 10.7685C76.8984 10.902 77.1598 11.0114 77.5206 11.0966L78.5604 11.3352C79.1626 11.4744 79.6115 11.6889 79.907 11.9787C80.2024 12.2685 80.3501 12.6449 80.3501 13.108C80.3501 13.5 80.2365 13.8494 80.0092 14.1562C79.7848 14.4602 79.4709 14.6989 79.0675 14.8722C78.6669 15.0455 78.2024 15.1321 77.674 15.1321C76.9411 15.1321 76.343 14.9759 75.88 14.6634C75.4169 14.348 75.1328 13.9006 75.0277 13.321L76.2592 13.1335C76.3359 13.4545 76.4936 13.6974 76.7322 13.8622C76.9709 14.0241 77.282 14.1051 77.6655 14.1051C78.0831 14.1051 78.4169 14.0185 78.6669 13.8452C78.9169 13.669 79.0419 13.4545 79.0419 13.2017C79.0419 12.9972 78.9652 12.8253 78.8118 12.6861C78.6612 12.5469 78.4297 12.4418 78.1172 12.3707L77.0092 12.1278C76.3984 11.9886 75.9467 11.767 75.6541 11.4631C75.3643 11.1591 75.2195 10.7741 75.2195 10.3082C75.2195 9.92187 75.3274 9.58381 75.5433 9.29403C75.7592 9.00426 76.0575 8.77841 76.4382 8.61648C76.8189 8.4517 77.255 8.36932 77.7464 8.36932C78.4538 8.36932 79.0107 8.52273 79.4169 8.82955C79.8232 9.13352 80.0916 9.54119 80.2223 10.0526ZM86.6559 10.0526L85.5011 10.2571C85.4528 10.1094 85.3761 9.96875 85.271 9.83523C85.1687 9.7017 85.0295 9.59233 84.8533 9.5071C84.6772 9.42187 84.457 9.37926 84.1928 9.37926C83.832 9.37926 83.5309 9.46023 83.2894 9.62216C83.0479 9.78125 82.9272 9.98722 82.9272 10.2401C82.9272 10.4588 83.0082 10.6349 83.1701 10.7685C83.332 10.902 83.5934 11.0114 83.9542 11.0966L84.994 11.3352C85.5962 11.4744 86.0451 11.6889 86.3406 11.9787C86.636 12.2685 86.7837 12.6449 86.7837 13.108C86.7837 13.5 86.6701 13.8494 86.4428 14.1562C86.2184 14.4602 85.9045 14.6989 85.5011 14.8722C85.1005 15.0455 84.636 15.1321 84.1076 15.1321C83.3746 15.1321 82.7766 14.9759 82.3136 14.6634C81.8505 14.348 81.5664 13.9006 81.4613 13.321L82.6928 13.1335C82.7695 13.4545 82.9272 13.6974 83.1658 13.8622C83.4045 14.0241 83.7156 14.1051 84.0991 14.1051C84.5167 14.1051 84.8505 14.0185 85.1005 13.8452C85.3505 13.669 85.4755 13.4545 85.4755 13.2017C85.4755 12.9972 85.3988 12.8253 85.2454 12.6861C85.0948 12.5469 84.8633 12.4418 84.5508 12.3707L83.4428 12.1278C82.832 11.9886 82.3803 11.767 82.0877 11.4631C81.7979 11.1591 81.6531 10.7741 81.6531 10.3082C81.6531 9.92187 81.761 9.58381 81.9769 9.29403C82.1928 9.00426 82.4911 8.77841 82.8718 8.61648C83.2525 8.4517 83.6886 8.36932 84.18 8.36932C84.8874 8.36932 85.4442 8.52273 85.8505 8.82955C86.2567 9.13352 86.5252 9.54119 86.6559 10.0526Z"
                                  fill="#175CD3"
                                />
                              </svg>
                            </div>
                          )}
                          <div className="action w-20 flex items-center justify-center cursor-pointer min-w-[80px]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                                stroke="#464646"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                                stroke="#464646"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                                stroke="#464646"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </div>
                      );
                    })
                : filteredComplaintsArray.map((complains) => {
                    return (
                      <div
                        key={complains.id}
                        className="vendorComplaints max-md:w-max p-3 flex flex-row max-lg:w-max items-center justify-between border-solid border-b-2 border-zinc-200"
                      >
                        <input
                          className="w-6 h-5 cursor-pointer min-w-[32px] border-zinc-200 px"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <div className="name w-80 flex flex-row items-center min-w-[250px]">
                          <div className="displayPicture">
                            <Image
                              alt=""
                              src={complains.image}
                              className="h-10 w-10 rounded-full object-contain"
                              width={40}
                              height={40}
                            />
                            {/* <img src="" className="h-10 w-10 rounded-full object-contain" alt="" /> */}
                          </div>
                          <Link href={'/super-admin/feedback-and-customer-support/[1]'} className="identity pl-2">
                            <div>
                              <h2 className="font-manropeL font-semibold text-base">{complains.name}</h2>
                              <p className="font-manropeL text-xs font-normal text-slate-500">{complains.email}</p>
                            </div>
                          </Link>
                        </div>
                        <div className="description w-40  min-w-[120px] max-lg:min-w-[160px] flex items-center justify-center">
                          <p className="font-manropeL font-medium text-base max-md:text-xs text-slate-500">
                            {complains.complaintDescription}
                          </p>
                        </div>
                        <div className="date w-40 min-w-[120px] flex items-center justify-center">
                          <p className="font-manropeL font-medium text-base text-slate-500">{complains.date}</p>
                        </div>
                        {complains.status === 'Resolved' && (
                          <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                            <svg
                              width="80"
                              height="22"
                              viewBox="0 0 80 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="80" height="22" rx="11" fill="#ECFDF3" />
                              <circle cx="10" cy="11" r="3" fill="#12B76A" />
                              <path
                                d="M21.0002 16V7.36H24.4142C24.4982 7.36 24.5982 7.364 24.7142 7.372C24.8302 7.376 24.9422 7.388 25.0502 7.408C25.5182 7.48 25.9102 7.64 26.2262 7.888C26.5462 8.136 26.7862 8.45 26.9462 8.83C27.1062 9.206 27.1862 9.624 27.1862 10.084C27.1862 10.752 27.0122 11.332 26.6642 11.824C26.3162 12.312 25.8062 12.618 25.1342 12.742L24.7262 12.808H22.0682V16H21.0002ZM26.1422 16L24.4382 12.484L25.4942 12.16L27.3662 16H26.1422ZM22.0682 11.794H24.3782C24.4542 11.794 24.5402 11.79 24.6362 11.782C24.7362 11.774 24.8302 11.76 24.9182 11.74C25.1942 11.676 25.4182 11.56 25.5902 11.392C25.7662 11.22 25.8942 11.02 25.9742 10.792C26.0542 10.56 26.0942 10.324 26.0942 10.084C26.0942 9.844 26.0542 9.61 25.9742 9.382C25.8942 9.15 25.7662 8.948 25.5902 8.776C25.4182 8.604 25.1942 8.488 24.9182 8.428C24.8302 8.404 24.7362 8.39 24.6362 8.386C24.5402 8.378 24.4542 8.374 24.3782 8.374H22.0682V11.794ZM31.4957 16.18C30.8597 16.18 30.3037 16.04 29.8277 15.76C29.3557 15.476 28.9877 15.082 28.7237 14.578C28.4597 14.07 28.3277 13.478 28.3277 12.802C28.3277 12.094 28.4577 11.482 28.7177 10.966C28.9777 10.446 29.3397 10.046 29.8037 9.766C30.2717 9.482 30.8197 9.34 31.4477 9.34C32.0997 9.34 32.6537 9.49 33.1097 9.79C33.5697 10.09 33.9137 10.518 34.1417 11.074C34.3737 11.63 34.4737 12.292 34.4417 13.06H33.3617V12.676C33.3497 11.88 33.1877 11.286 32.8757 10.894C32.5637 10.498 32.0997 10.3 31.4837 10.3C30.8237 10.3 30.3217 10.512 29.9777 10.936C29.6337 11.36 29.4617 11.968 29.4617 12.76C29.4617 13.524 29.6337 14.116 29.9777 14.536C30.3217 14.956 30.8117 15.166 31.4477 15.166C31.8757 15.166 32.2477 15.068 32.5637 14.872C32.8797 14.676 33.1277 14.394 33.3077 14.026L34.3337 14.38C34.0817 14.952 33.7017 15.396 33.1937 15.712C32.6897 16.024 32.1237 16.18 31.4957 16.18ZM29.1017 13.06V12.202H33.8897V13.06H29.1017ZM38.2255 16.174C37.4535 16.174 36.8195 16.006 36.3235 15.67C35.8315 15.33 35.5295 14.856 35.4175 14.248L36.5095 14.074C36.5975 14.426 36.7995 14.706 37.1155 14.914C37.4315 15.118 37.8235 15.22 38.2915 15.22C38.7355 15.22 39.0835 15.128 39.3355 14.944C39.5875 14.76 39.7135 14.51 39.7135 14.194C39.7135 14.01 39.6715 13.862 39.5875 13.75C39.5035 13.634 39.3295 13.526 39.0655 13.426C38.8055 13.326 38.4115 13.206 37.8835 13.066C37.3115 12.914 36.8615 12.756 36.5335 12.592C36.2055 12.428 35.9715 12.238 35.8315 12.022C35.6915 11.806 35.6215 11.544 35.6215 11.236C35.6215 10.856 35.7255 10.524 35.9335 10.24C36.1415 9.952 36.4315 9.73 36.8035 9.574C37.1795 9.418 37.6155 9.34 38.1115 9.34C38.6035 9.34 39.0435 9.418 39.4315 9.574C39.8195 9.73 40.1315 9.952 40.3675 10.24C40.6075 10.524 40.7495 10.856 40.7935 11.236L39.7015 11.434C39.6495 11.086 39.4815 10.812 39.1975 10.612C38.9175 10.412 38.5555 10.306 38.1115 10.294C37.6915 10.278 37.3495 10.352 37.0855 10.516C36.8255 10.68 36.6955 10.902 36.6955 11.182C36.6955 11.338 36.7435 11.472 36.8395 11.584C36.9395 11.696 37.1215 11.802 37.3855 11.902C37.6535 12.002 38.0415 12.116 38.5495 12.244C39.1215 12.388 39.5715 12.546 39.8995 12.718C40.2315 12.886 40.4675 13.086 40.6075 13.318C40.7475 13.546 40.8175 13.828 40.8175 14.164C40.8175 14.788 40.5875 15.28 40.1275 15.64C39.6675 15.996 39.0335 16.174 38.2255 16.174ZM44.9008 16.18C44.2568 16.18 43.7008 16.034 43.2328 15.742C42.7688 15.45 42.4108 15.046 42.1588 14.53C41.9068 14.014 41.7808 13.422 41.7808 12.754C41.7808 12.074 41.9088 11.478 42.1648 10.966C42.4208 10.454 42.7828 10.056 43.2508 9.772C43.7188 9.484 44.2688 9.34 44.9008 9.34C45.5488 9.34 46.1068 9.486 46.5748 9.778C47.0428 10.066 47.4008 10.468 47.6488 10.984C47.9008 11.496 48.0268 12.086 48.0268 12.754C48.0268 13.43 47.9008 14.026 47.6488 14.542C47.3968 15.054 47.0368 15.456 46.5688 15.748C46.1008 16.036 45.5448 16.18 44.9008 16.18ZM44.9008 15.166C45.5728 15.166 46.0728 14.942 46.4008 14.494C46.7288 14.046 46.8928 13.466 46.8928 12.754C46.8928 12.022 46.7268 11.44 46.3948 11.008C46.0628 10.572 45.5648 10.354 44.9008 10.354C44.4488 10.354 44.0768 10.456 43.7848 10.66C43.4928 10.864 43.2748 11.146 43.1308 11.506C42.9868 11.866 42.9148 12.282 42.9148 12.754C42.9148 13.482 43.0828 14.066 43.4188 14.506C43.7548 14.946 44.2488 15.166 44.9008 15.166ZM49.4678 16V7.18H50.5358V16H49.4678ZM54.0881 16L51.7361 9.52H52.8161L54.6341 14.638L56.4461 9.52H57.5321L55.1801 16H54.0881ZM61.191 16.18C60.555 16.18 59.999 16.04 59.523 15.76C59.051 15.476 58.683 15.082 58.419 14.578C58.155 14.07 58.023 13.478 58.023 12.802C58.023 12.094 58.153 11.482 58.413 10.966C58.673 10.446 59.035 10.046 59.499 9.766C59.967 9.482 60.515 9.34 61.143 9.34C61.795 9.34 62.349 9.49 62.805 9.79C63.265 10.09 63.609 10.518 63.837 11.074C64.069 11.63 64.169 12.292 64.137 13.06H63.057V12.676C63.045 11.88 62.883 11.286 62.571 10.894C62.259 10.498 61.795 10.3 61.179 10.3C60.519 10.3 60.017 10.512 59.673 10.936C59.329 11.36 59.157 11.968 59.157 12.76C59.157 13.524 59.329 14.116 59.673 14.536C60.017 14.956 60.507 15.166 61.143 15.166C61.571 15.166 61.943 15.068 62.259 14.872C62.575 14.676 62.823 14.394 63.003 14.026L64.029 14.38C63.777 14.952 63.397 15.396 62.889 15.712C62.385 16.024 61.819 16.18 61.191 16.18ZM58.797 13.06V12.202H63.585V13.06H58.797ZM68.0168 16.18C67.4128 16.18 66.8948 16.03 66.4628 15.73C66.0308 15.426 65.6968 15.016 65.4608 14.5C65.2288 13.984 65.1128 13.402 65.1128 12.754C65.1128 12.106 65.2288 11.524 65.4608 11.008C65.6968 10.492 66.0308 10.086 66.4628 9.79C66.8948 9.49 67.4108 9.34 68.0108 9.34C68.6228 9.34 69.1368 9.488 69.5528 9.784C69.9688 10.08 70.2828 10.486 70.4948 11.002C70.7108 11.518 70.8188 12.102 70.8188 12.754C70.8188 13.398 70.7108 13.98 70.4948 14.5C70.2828 15.016 69.9688 15.426 69.5528 15.73C69.1368 16.03 68.6248 16.18 68.0168 16.18ZM68.1488 15.202C68.5848 15.202 68.9428 15.098 69.2228 14.89C69.5028 14.678 69.7088 14.388 69.8408 14.02C69.9768 13.648 70.0448 13.226 70.0448 12.754C70.0448 12.274 69.9768 11.852 69.8408 11.488C69.7088 11.12 69.5048 10.834 69.2288 10.63C68.9528 10.422 68.6028 10.318 68.1788 10.318C67.7388 10.318 67.3748 10.426 67.0868 10.642C66.8028 10.858 66.5908 11.15 66.4508 11.518C66.3148 11.886 66.2468 12.298 66.2468 12.754C66.2468 13.214 66.3168 13.63 66.4568 14.002C66.5968 14.37 66.8068 14.662 67.0868 14.878C67.3708 15.094 67.7248 15.202 68.1488 15.202ZM70.0448 16V11.23H69.9248V7.36H70.9988V16H70.0448Z"
                                fill="#027A48"
                              />
                            </svg>
                          </div>
                        )}
                        {complains.status === 'Pending' && (
                          <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                            <svg
                              width="76"
                              height="22"
                              viewBox="0 0 76 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <rect x="0.5" width="75" height="22" rx="11" fill="#FFFBDE" />
                                <circle cx="10.5" cy="11" r="3" fill="#E5B800" />
                                <path
                                  d="M21.8009 16V7.36H25.2149C25.2989 7.36 25.3989 7.364 25.5149 7.372C25.6309 7.376 25.7429 7.388 25.8509 7.408C26.3189 7.48 26.7109 7.64 27.0269 7.888C27.3469 8.136 27.5869 8.45 27.7469 8.83C27.9069 9.206 27.9869 9.624 27.9869 10.084C27.9869 10.54 27.9049 10.958 27.7409 11.338C27.5809 11.714 27.3409 12.028 27.0209 12.28C26.7049 12.528 26.3149 12.688 25.8509 12.76C25.7429 12.776 25.6309 12.788 25.5149 12.796C25.3989 12.804 25.2989 12.808 25.2149 12.808H22.8689V16H21.8009ZM22.8689 11.794H25.1789C25.2549 11.794 25.3409 11.79 25.4369 11.782C25.5369 11.774 25.6309 11.76 25.7189 11.74C25.9949 11.676 26.2189 11.56 26.3909 11.392C26.5669 11.22 26.6949 11.02 26.7749 10.792C26.8549 10.56 26.8949 10.324 26.8949 10.084C26.8949 9.844 26.8549 9.61 26.7749 9.382C26.6949 9.15 26.5669 8.948 26.3909 8.776C26.2189 8.604 25.9949 8.488 25.7189 8.428C25.6309 8.404 25.5369 8.39 25.4369 8.386C25.3409 8.378 25.2549 8.374 25.1789 8.374H22.8689V11.794ZM31.9332 16.18C31.2972 16.18 30.7412 16.04 30.2652 15.76C29.7932 15.476 29.4252 15.082 29.1612 14.578C28.8972 14.07 28.7652 13.478 28.7652 12.802C28.7652 12.094 28.8952 11.482 29.1552 10.966C29.4152 10.446 29.7772 10.046 30.2412 9.766C30.7092 9.482 31.2572 9.34 31.8852 9.34C32.5372 9.34 33.0912 9.49 33.5472 9.79C34.0072 10.09 34.3512 10.518 34.5792 11.074C34.8112 11.63 34.9112 12.292 34.8792 13.06H33.7992V12.676C33.7872 11.88 33.6252 11.286 33.3132 10.894C33.0012 10.498 32.5372 10.3 31.9212 10.3C31.2612 10.3 30.7592 10.512 30.4152 10.936C30.0712 11.36 29.8992 11.968 29.8992 12.76C29.8992 13.524 30.0712 14.116 30.4152 14.536C30.7592 14.956 31.2492 15.166 31.8852 15.166C32.3132 15.166 32.6852 15.068 33.0012 14.872C33.3172 14.676 33.5652 14.394 33.7452 14.026L34.7712 14.38C34.5192 14.952 34.1392 15.396 33.6312 15.712C33.1272 16.024 32.5612 16.18 31.9332 16.18ZM29.5392 13.06V12.202H34.3272V13.06H29.5392ZM40.6532 16V12.754C40.6532 12.446 40.6252 12.15 40.5692 11.866C40.5172 11.582 40.4232 11.328 40.2872 11.104C40.1552 10.876 39.9752 10.696 39.7472 10.564C39.5232 10.432 39.2392 10.366 38.8952 10.366C38.6272 10.366 38.3832 10.412 38.1632 10.504C37.9472 10.592 37.7612 10.728 37.6052 10.912C37.4492 11.096 37.3272 11.328 37.2392 11.608C37.1552 11.884 37.1132 12.21 37.1132 12.586L36.4112 12.37C36.4112 11.742 36.5232 11.204 36.7472 10.756C36.9752 10.304 37.2932 9.958 37.7012 9.718C38.1132 9.474 38.5972 9.352 39.1532 9.352C39.5732 9.352 39.9312 9.418 40.2272 9.55C40.5232 9.682 40.7692 9.858 40.9652 10.078C41.1612 10.294 41.3152 10.538 41.4272 10.81C41.5392 11.078 41.6172 11.352 41.6612 11.632C41.7092 11.908 41.7332 12.17 41.7332 12.418V16H40.6532ZM36.0332 16V9.52H36.9932V11.254H37.1132V16H36.0332ZM45.7785 16.18C45.1745 16.18 44.6565 16.03 44.2245 15.73C43.7925 15.426 43.4585 15.016 43.2225 14.5C42.9905 13.984 42.8745 13.402 42.8745 12.754C42.8745 12.106 42.9905 11.524 43.2225 11.008C43.4585 10.492 43.7925 10.086 44.2245 9.79C44.6565 9.49 45.1725 9.34 45.7725 9.34C46.3845 9.34 46.8985 9.488 47.3145 9.784C47.7305 10.08 48.0445 10.486 48.2565 11.002C48.4725 11.518 48.5805 12.102 48.5805 12.754C48.5805 13.398 48.4725 13.98 48.2565 14.5C48.0445 15.016 47.7305 15.426 47.3145 15.73C46.8985 16.03 46.3865 16.18 45.7785 16.18ZM45.9105 15.202C46.3465 15.202 46.7045 15.098 46.9845 14.89C47.2645 14.678 47.4705 14.388 47.6025 14.02C47.7385 13.648 47.8065 13.226 47.8065 12.754C47.8065 12.274 47.7385 11.852 47.6025 11.488C47.4705 11.12 47.2665 10.834 46.9905 10.63C46.7145 10.422 46.3645 10.318 45.9405 10.318C45.5005 10.318 45.1365 10.426 44.8485 10.642C44.5645 10.858 44.3525 11.15 44.2125 11.518C44.0765 11.886 44.0085 12.298 44.0085 12.754C44.0085 13.214 44.0785 13.63 44.2185 14.002C44.3585 14.37 44.5685 14.662 44.8485 14.878C45.1325 15.094 45.4865 15.202 45.9105 15.202ZM47.8065 16V11.23H47.6865V7.36H48.7605V16H47.8065ZM50.5616 8.374V7.27H51.6296V8.374H50.5616ZM50.5616 16V9.52H51.6296V16H50.5616ZM58.0438 16V12.754C58.0438 12.446 58.0158 12.15 57.9598 11.866C57.9078 11.582 57.8138 11.328 57.6778 11.104C57.5458 10.876 57.3658 10.696 57.1378 10.564C56.9138 10.432 56.6298 10.366 56.2858 10.366C56.0178 10.366 55.7738 10.412 55.5538 10.504C55.3378 10.592 55.1518 10.728 54.9958 10.912C54.8398 11.096 54.7178 11.328 54.6298 11.608C54.5458 11.884 54.5038 12.21 54.5038 12.586L53.8018 12.37C53.8018 11.742 53.9138 11.204 54.1378 10.756C54.3658 10.304 54.6838 9.958 55.0918 9.718C55.5038 9.474 55.9878 9.352 56.5438 9.352C56.9638 9.352 57.3218 9.418 57.6178 9.55C57.9138 9.682 58.1598 9.858 58.3558 10.078C58.5518 10.294 58.7058 10.538 58.8178 10.81C58.9298 11.078 59.0078 11.352 59.0518 11.632C59.0998 11.908 59.1238 12.17 59.1238 12.418V16H58.0438ZM53.4238 16V9.52H54.3838V11.254H54.5038V16H53.4238ZM63.3058 19.06C62.9658 19.06 62.6338 19.008 62.3098 18.904C61.9858 18.8 61.6878 18.642 61.4158 18.43C61.1478 18.222 60.9238 17.958 60.7438 17.638L61.7218 17.122C61.8818 17.438 62.1078 17.668 62.3998 17.812C62.6958 17.956 62.9998 18.028 63.3118 18.028C63.7238 18.028 64.0658 17.952 64.3378 17.8C64.6098 17.652 64.8098 17.43 64.9378 17.134C65.0698 16.838 65.1338 16.47 65.1298 16.03V14.26H65.2558V9.52H66.2038V16.042C66.2038 16.218 66.1978 16.388 66.1858 16.552C66.1778 16.716 66.1578 16.878 66.1258 17.038C66.0418 17.498 65.8758 17.876 65.6278 18.172C65.3798 18.472 65.0598 18.694 64.6678 18.838C64.2758 18.986 63.8218 19.06 63.3058 19.06ZM63.2278 16.18C62.6238 16.18 62.1058 16.03 61.6738 15.73C61.2418 15.426 60.9078 15.016 60.6718 14.5C60.4398 13.984 60.3238 13.402 60.3238 12.754C60.3238 12.106 60.4398 11.524 60.6718 11.008C60.9078 10.492 61.2418 10.086 61.6738 9.79C62.1058 9.49 62.6218 9.34 63.2218 9.34C63.8338 9.34 64.3478 9.488 64.7638 9.784C65.1798 10.08 65.4938 10.486 65.7058 11.002C65.9218 11.518 66.0298 12.102 66.0298 12.754C66.0298 13.398 65.9218 13.98 65.7058 14.5C65.4938 15.016 65.1798 15.426 64.7638 15.73C64.3478 16.03 63.8358 16.18 63.2278 16.18ZM63.3598 15.202C63.7958 15.202 64.1538 15.098 64.4338 14.89C64.7138 14.678 64.9198 14.388 65.0518 14.02C65.1878 13.648 65.2558 13.226 65.2558 12.754C65.2558 12.274 65.1878 11.852 65.0518 11.488C64.9198 11.12 64.7158 10.834 64.4398 10.63C64.1638 10.422 63.8138 10.318 63.3898 10.318C62.9498 10.318 62.5858 10.426 62.2978 10.642C62.0138 10.858 61.8018 11.15 61.6618 11.518C61.5258 11.886 61.4578 12.298 61.4578 12.754C61.4578 13.214 61.5278 13.63 61.6678 14.002C61.8078 14.37 62.0178 14.662 62.2978 14.878C62.5818 15.094 62.9358 15.202 63.3598 15.202Z"
                                  fill="#E5B800"
                                />
                              </g>
                            </svg>
                          </div>
                        )}
                        {complains.status === 'InProgress' && (
                          <div className="status flex flex-row items-center justify-center w-36 min-w-[120px]">
                            <svg
                              width="96"
                              height="22"
                              viewBox="0 0 96 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect x="0.5" width="95" height="22" rx="11" fill="#EFF8FF" />
                              <circle cx="10.5" cy="11" r="3" fill="#2E90FA" />
                              <path
                                d="M22.9474 6.27273V15H21.6307V6.27273H22.9474ZM26.0369 11.1136V15H24.7628V8.45455H25.9858V9.51989H26.0668C26.2173 9.1733 26.4531 8.89489 26.7741 8.68466C27.098 8.47443 27.5057 8.36932 27.9972 8.36932C28.4432 8.36932 28.8338 8.46307 29.169 8.65057C29.5043 8.83523 29.7642 9.1108 29.9489 9.47727C30.1335 9.84375 30.2259 10.2969 30.2259 10.8366V15H28.9517V10.9901C28.9517 10.5156 28.8281 10.1449 28.581 9.87784C28.3338 9.60795 27.9943 9.47301 27.5625 9.47301C27.267 9.47301 27.0043 9.53693 26.7741 9.66477C26.5469 9.79261 26.3665 9.98011 26.233 10.2273C26.1023 10.4716 26.0369 10.767 26.0369 11.1136ZM35.7912 10.7599V11.8636H31.9219V10.7599H35.7912ZM37.4893 17.4545V8.45455H38.7337V9.51562H38.8402C38.9141 9.37926 39.0206 9.22159 39.1598 9.04261C39.299 8.86364 39.4922 8.70739 39.7393 8.57386C39.9865 8.4375 40.3132 8.36932 40.7195 8.36932C41.2479 8.36932 41.7195 8.50284 42.1342 8.76989C42.549 9.03693 42.8743 9.42187 43.1101 9.92472C43.3487 10.4276 43.468 11.0327 43.468 11.7401C43.468 12.4474 43.3501 13.054 43.1143 13.5597C42.8786 14.0625 42.5547 14.4503 42.1428 14.723C41.7308 14.9929 41.2607 15.1278 40.7322 15.1278C40.3345 15.1278 40.0092 15.0611 39.7564 14.9276C39.5064 14.794 39.3104 14.6378 39.1683 14.4588C39.0263 14.2798 38.9169 14.1207 38.8402 13.9815H38.7635V17.4545H37.4893ZM38.7379 11.7273C38.7379 12.1875 38.8047 12.5909 38.9382 12.9375C39.0717 13.2841 39.2649 13.5554 39.5178 13.7514C39.7706 13.9446 40.0803 14.0412 40.4467 14.0412C40.8274 14.0412 41.1456 13.9403 41.4013 13.7386C41.657 13.5341 41.8501 13.2571 41.9808 12.9077C42.1143 12.5582 42.1811 12.1648 42.1811 11.7273C42.1811 11.2955 42.1158 10.9077 41.9851 10.5639C41.8572 10.2202 41.6641 9.94886 41.4055 9.75C41.1499 9.55114 40.8303 9.4517 40.4467 9.4517C40.0774 9.4517 39.7649 9.54687 39.5092 9.73722C39.2564 9.92756 39.0646 10.1932 38.9339 10.5341C38.8033 10.875 38.7379 11.2727 38.7379 11.7273ZM44.8956 15V8.45455H46.1271V9.49432H46.1953C46.3146 9.14205 46.5249 8.86506 46.826 8.66335C47.13 8.45881 47.4737 8.35653 47.8572 8.35653C47.9368 8.35653 48.0305 8.35937 48.1385 8.36506C48.2493 8.37074 48.3359 8.37784 48.3984 8.38636V9.60511C48.3473 9.59091 48.2564 9.57528 48.1257 9.55824C47.995 9.53835 47.8643 9.52841 47.7337 9.52841C47.4325 9.52841 47.1641 9.59233 46.9283 9.72017C46.6953 9.84517 46.5107 10.0199 46.3743 10.2443C46.2379 10.4659 46.1697 10.7187 46.1697 11.0028V15H44.8956ZM52.0238 15.1321C51.4102 15.1321 50.8746 14.9915 50.4173 14.7102C49.9599 14.429 49.6048 14.0355 49.3519 13.5298C49.0991 13.0241 48.9727 12.4332 48.9727 11.7571C48.9727 11.0781 49.0991 10.4844 49.3519 9.97585C49.6048 9.46733 49.9599 9.07244 50.4173 8.79119C50.8746 8.50994 51.4102 8.36932 52.0238 8.36932C52.6374 8.36932 53.1729 8.50994 53.6303 8.79119C54.0877 9.07244 54.4428 9.46733 54.6957 9.97585C54.9485 10.4844 55.0749 11.0781 55.0749 11.7571C55.0749 12.4332 54.9485 13.0241 54.6957 13.5298C54.4428 14.0355 54.0877 14.429 53.6303 14.7102C53.1729 14.9915 52.6374 15.1321 52.0238 15.1321ZM52.0281 14.0625C52.4258 14.0625 52.7553 13.9574 53.0167 13.7472C53.2781 13.5369 53.4712 13.2571 53.5962 12.9077C53.7241 12.5582 53.788 12.1733 53.788 11.7528C53.788 11.3352 53.7241 10.9517 53.5962 10.6023C53.4712 10.25 53.2781 9.96733 53.0167 9.75426C52.7553 9.54119 52.4258 9.43466 52.0281 9.43466C51.6275 9.43466 51.2951 9.54119 51.0309 9.75426C50.7695 9.96733 50.5749 10.25 50.4471 10.6023C50.3221 10.9517 50.2596 11.3352 50.2596 11.7528C50.2596 12.1733 50.3221 12.5582 50.4471 12.9077C50.5749 13.2571 50.7695 13.5369 51.0309 13.7472C51.2951 13.9574 51.6275 14.0625 52.0281 14.0625ZM59.2415 17.5909C58.7216 17.5909 58.2741 17.5227 57.8991 17.3864C57.527 17.25 57.223 17.0696 56.9872 16.8452C56.7514 16.6207 56.5753 16.375 56.4588 16.108L57.554 15.6562C57.6307 15.7812 57.733 15.9134 57.8608 16.0526C57.9915 16.1946 58.1676 16.3153 58.3892 16.4148C58.6136 16.5142 58.902 16.5639 59.2543 16.5639C59.7372 16.5639 60.1364 16.446 60.4517 16.2102C60.767 15.9773 60.9247 15.6051 60.9247 15.0938V13.8068H60.8438C60.767 13.946 60.6563 14.1009 60.5114 14.2713C60.3693 14.4418 60.1733 14.5895 59.9233 14.7145C59.6733 14.8395 59.348 14.902 58.9474 14.902C58.4304 14.902 57.9645 14.7812 57.5497 14.5398C57.1378 14.2955 56.8111 13.9361 56.5696 13.4616C56.331 12.9844 56.2116 12.3977 56.2116 11.7017C56.2116 11.0057 56.3295 10.4091 56.5653 9.91193C56.804 9.41477 57.1307 9.03409 57.5455 8.76989C57.9602 8.50284 58.4304 8.36932 58.956 8.36932C59.3622 8.36932 59.6903 8.4375 59.9403 8.57386C60.1903 8.70739 60.3849 8.86364 60.5241 9.04261C60.6662 9.22159 60.7756 9.37926 60.8523 9.51562H60.946V8.45455H62.1946V15.1449C62.1946 15.7074 62.0639 16.169 61.8026 16.5298C61.5412 16.8906 61.1875 17.1577 60.7415 17.331C60.2983 17.5043 59.7983 17.5909 59.2415 17.5909ZM59.2287 13.8452C59.5952 13.8452 59.9048 13.7599 60.1577 13.5895C60.4134 13.4162 60.6065 13.169 60.7372 12.848C60.8707 12.5241 60.9375 12.1364 60.9375 11.6847C60.9375 11.2443 60.8722 10.8565 60.7415 10.5213C60.6108 10.1861 60.419 9.92472 60.1662 9.73722C59.9134 9.54687 59.6009 9.4517 59.2287 9.4517C58.8452 9.4517 58.5256 9.55114 58.2699 9.75C58.0142 9.94602 57.821 10.2131 57.6903 10.5511C57.5625 10.8892 57.4986 11.267 57.4986 11.6847C57.4986 12.1136 57.5639 12.4901 57.6946 12.8139C57.8253 13.1378 58.0185 13.3906 58.2741 13.5724C58.5327 13.7543 58.8509 13.8452 59.2287 13.8452ZM63.9034 15V8.45455H65.1349V9.49432H65.2031C65.3224 9.14205 65.5327 8.86506 65.8338 8.66335C66.1378 8.45881 66.4815 8.35653 66.8651 8.35653C66.9446 8.35653 67.0384 8.35937 67.1463 8.36506C67.2571 8.37074 67.3438 8.37784 67.4062 8.38636V9.60511C67.3551 9.59091 67.2642 9.57528 67.1335 9.55824C67.0028 9.53835 66.8722 9.52841 66.7415 9.52841C66.4403 9.52841 66.1719 9.59233 65.9361 9.72017C65.7031 9.84517 65.5185 10.0199 65.3821 10.2443C65.2457 10.4659 65.1776 10.7187 65.1776 11.0028V15H63.9034ZM71.0955 15.1321C70.4506 15.1321 69.8952 14.9943 69.4293 14.7188C68.9663 14.4403 68.6083 14.0497 68.3555 13.5469C68.1055 13.0412 67.9805 12.4489 67.9805 11.7699C67.9805 11.0994 68.1055 10.5085 68.3555 9.99716C68.6083 9.4858 68.9606 9.08665 69.4123 8.79972C69.8668 8.51278 70.3981 8.36932 71.006 8.36932C71.3754 8.36932 71.7333 8.4304 72.0799 8.55256C72.4265 8.67472 72.7376 8.86648 73.0131 9.12784C73.2887 9.3892 73.506 9.72869 73.6651 10.1463C73.8242 10.5611 73.9038 11.0653 73.9038 11.6591V12.1108H68.7006V11.1562H72.6552C72.6552 10.821 72.587 10.5241 72.4506 10.2656C72.3143 10.0043 72.1225 9.7983 71.8754 9.64773C71.631 9.49716 71.3441 9.42188 71.0146 9.42188C70.6566 9.42188 70.3441 9.50994 70.0771 9.68608C69.8129 9.85937 69.6083 10.0866 69.4634 10.3679C69.3214 10.6463 69.2504 10.9489 69.2504 11.2756V12.0213C69.2504 12.4588 69.3271 12.831 69.4805 13.1378C69.6367 13.4446 69.854 13.679 70.1325 13.8409C70.4109 14 70.7362 14.0795 71.1083 14.0795C71.3498 14.0795 71.57 14.0455 71.7688 13.9773C71.9677 13.9062 72.1396 13.8011 72.2844 13.6619C72.4293 13.5227 72.5401 13.3509 72.6168 13.1463L73.8228 13.3636C73.7262 13.7187 73.5529 14.0298 73.3029 14.2969C73.0558 14.5611 72.7447 14.767 72.3697 14.9148C71.9975 15.0597 71.5728 15.1321 71.0955 15.1321ZM80.2223 10.0526L79.0675 10.2571C79.0192 10.1094 78.9425 9.96875 78.8374 9.83523C78.7351 9.7017 78.5959 9.59233 78.4197 9.5071C78.2436 9.42187 78.0234 9.37926 77.7592 9.37926C77.3984 9.37926 77.0973 9.46023 76.8558 9.62216C76.6143 9.78125 76.4936 9.98722 76.4936 10.2401C76.4936 10.4588 76.5746 10.6349 76.7365 10.7685C76.8984 10.902 77.1598 11.0114 77.5206 11.0966L78.5604 11.3352C79.1626 11.4744 79.6115 11.6889 79.907 11.9787C80.2024 12.2685 80.3501 12.6449 80.3501 13.108C80.3501 13.5 80.2365 13.8494 80.0092 14.1562C79.7848 14.4602 79.4709 14.6989 79.0675 14.8722C78.6669 15.0455 78.2024 15.1321 77.674 15.1321C76.9411 15.1321 76.343 14.9759 75.88 14.6634C75.4169 14.348 75.1328 13.9006 75.0277 13.321L76.2592 13.1335C76.3359 13.4545 76.4936 13.6974 76.7322 13.8622C76.9709 14.0241 77.282 14.1051 77.6655 14.1051C78.0831 14.1051 78.4169 14.0185 78.6669 13.8452C78.9169 13.669 79.0419 13.4545 79.0419 13.2017C79.0419 12.9972 78.9652 12.8253 78.8118 12.6861C78.6612 12.5469 78.4297 12.4418 78.1172 12.3707L77.0092 12.1278C76.3984 11.9886 75.9467 11.767 75.6541 11.4631C75.3643 11.1591 75.2195 10.7741 75.2195 10.3082C75.2195 9.92187 75.3274 9.58381 75.5433 9.29403C75.7592 9.00426 76.0575 8.77841 76.4382 8.61648C76.8189 8.4517 77.255 8.36932 77.7464 8.36932C78.4538 8.36932 79.0107 8.52273 79.4169 8.82955C79.8232 9.13352 80.0916 9.54119 80.2223 10.0526ZM86.6559 10.0526L85.5011 10.2571C85.4528 10.1094 85.3761 9.96875 85.271 9.83523C85.1687 9.7017 85.0295 9.59233 84.8533 9.5071C84.6772 9.42187 84.457 9.37926 84.1928 9.37926C83.832 9.37926 83.5309 9.46023 83.2894 9.62216C83.0479 9.78125 82.9272 9.98722 82.9272 10.2401C82.9272 10.4588 83.0082 10.6349 83.1701 10.7685C83.332 10.902 83.5934 11.0114 83.9542 11.0966L84.994 11.3352C85.5962 11.4744 86.0451 11.6889 86.3406 11.9787C86.636 12.2685 86.7837 12.6449 86.7837 13.108C86.7837 13.5 86.6701 13.8494 86.4428 14.1562C86.2184 14.4602 85.9045 14.6989 85.5011 14.8722C85.1005 15.0455 84.636 15.1321 84.1076 15.1321C83.3746 15.1321 82.7766 14.9759 82.3136 14.6634C81.8505 14.348 81.5664 13.9006 81.4613 13.321L82.6928 13.1335C82.7695 13.4545 82.9272 13.6974 83.1658 13.8622C83.4045 14.0241 83.7156 14.1051 84.0991 14.1051C84.5167 14.1051 84.8505 14.0185 85.1005 13.8452C85.3505 13.669 85.4755 13.4545 85.4755 13.2017C85.4755 12.9972 85.3988 12.8253 85.2454 12.6861C85.0948 12.5469 84.8633 12.4418 84.5508 12.3707L83.4428 12.1278C82.832 11.9886 82.3803 11.767 82.0877 11.4631C81.7979 11.1591 81.6531 10.7741 81.6531 10.3082C81.6531 9.92187 81.761 9.58381 81.9769 9.29403C82.1928 9.00426 82.4911 8.77841 82.8718 8.61648C83.2525 8.4517 83.6886 8.36932 84.18 8.36932C84.8874 8.36932 85.4442 8.52273 85.8505 8.82955C86.2567 9.13352 86.5252 9.54119 86.6559 10.0526Z"
                                fill="#175CD3"
                              />
                            </svg>
                          </div>
                        )}
                        <div className="action w-20 flex items-center justify-center cursor-pointer min-w-[80px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                              stroke="#464646"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                              stroke="#464646"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                              stroke="#464646"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
