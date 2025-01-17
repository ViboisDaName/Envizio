import { BarChart2, ShoppingBag, Users, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CategoryDistributionChart from "../overview/CategoryDistributionChart";
import SalesOverviewChart from "../overview/SalesOverviewChart";
import AIInsights from "../overview/AIInsights";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Overview' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Carbon Emissions This Year' icon={ThumbsDown} value='432 Million Tons' color='#6366F1' />
					<StatCard name='Active IoT Sensors' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard name='Landfill Dependency' icon={BarChart2} value='89.9%' color='#EC4899' />
					<StatCard name='Recycling Rate' icon={BarChart2} value='10.1%' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-1 gap-8 pt-7'>
					<AIInsights />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;