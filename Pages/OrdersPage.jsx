import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import Definition from "../components/orders/Definition";
import FeedstockDistribution from "../components/orders/Feedstock";
import ManualOveride from "../components/orders/ManualOveride";
import OrderChart from "../components/orders/OrderChart";

const orderStats = {
	totalOrders: "92%",
	pendingOrders: "88/100",
	completedOrders: "3 Adjustments",
	totalRevenue: "24 Hours: +2%",
};

const OrdersPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Intelligent Gasification Optimization System (IGOS)"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				
				
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='System Efficiency' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatCard name='Suitability Score' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatCard
						name='AI Recommendations Executed'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
					<StatCard name='Efficiency Gains' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<FeedstockDistribution />
					<OrderDistribution />
				</div>

				<div className="mt-8 mb-8">
					<OrderChart />					
				</div>
			
				<Definition />

				<div className="mt-8">
					<ManualOveride />
				</div>
				
				
				
			</main>
		</div>
	);
};
export default OrdersPage;