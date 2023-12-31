import React from 'react';
import ReviewDashboardCard from '@modules/dashboard/component/reviews/ReviewDashboardCard';
import NavDashBoard from '@modules/dashboard/component/Navbar';
import PaginationBar from '@modules/dashboard/component/order/PaginationBar';
import MainLayout from '../../../components/Layout/MainLayout';
import Container from '@modules/auth/component/Container/Container';
import { cardData } from '../../../db/reviews';

export default function reviewDashboard() {
  return (
    <MainLayout activePage="Explore" showDashboardSidebar={false} showTopbar>
      <Container>
        <NavDashBoard active="reviews" />
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="w-11/12">
              <h2 className="lg:hidden self-stretch font-manropeB text-2xl pb-8">Reviews</h2>
              {cardData.map((card) => (
                <ReviewDashboardCard
                  key={card.id}
                  id={card.id}
                  className="mb-6"
                  imageSrc={card.imageSrc}
                  title={card.title}
                  author={card.author}
                  avgRating={card.avgRating}
                  ratingNo={card.ratingNo}
                  price={card.price}
                />
              ))}
            </div>
            <PaginationBar pageLength={1} currentPage={0} changeCurrentPage={() => 1} />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
