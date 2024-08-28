import CustomAccordionTab from '../CustomAccordionTab'
import React from 'react'
import { Tooltip, Typography, Box } from '@mui/material'
import CustomizedTable from '../../CustomizedTable'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import TourIcon from '@mui/icons-material/Tour'

const tableDataHeading = {
    0: 'Sharing Type',
    1: 'Price',
}

const getTableRowData = (pickupDetails) => {
    return {
        0: {
            sharingType: 'Quad Sharing',
            price: pickupDetails.quad_sharing_price,
        },
        1: {
            sharingType: 'Triple Sharing',
            price: pickupDetails.triple_sharing_price,
        },
        2: {
            sharingType: 'Double Sharing',
            price: pickupDetails.double_sharing_price,
        },
        3: {
            sharingType: 'Single/Per_Person Price',
            price: pickupDetails.single_price,
        },
    }
}

const DataPoints = ({ title, infoIcon, value }) => {
    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{ fontSize: '15px' }}
            >
                <Tooltip title={title}>
                    <Box>{infoIcon}</Box>
                </Tooltip>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                >
                    <Typography
                        gutterBottom
                        variant="body1"
                        color="primary.main"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body"
                        sx={{ lineHeight: 1.5, overflowWrap: 'anywhere' }}
                    >
                        <b>{value}</b>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}
const LocationDetails = ({
    pickupPoint,
    pickupTime,
    departureTime,
    tableDataRows,
}) => {
    return (
        <div elevation={3} sx={{ p: 3 }}>
            <DataPoints
                title={'Pickup Point'}
                value={pickupPoint}
                infoIcon={<LocationOnIcon />}
            />
            <br />
            <Box display="flex" alignItems="center" gap={10}>
                <DataPoints
                    title={'Pickup Time'}
                    value={pickupTime}
                    infoIcon={<AccessTimeFilledIcon />}
                />
                <DataPoints
                    title={'Departure Time'}
                    value={departureTime}
                    infoIcon={<DepartureBoardIcon />}
                />
            </Box>

            <br />
            <br />
            <CustomizedTable
                tableHeading={tableDataHeading}
                tableRow={tableDataRows}
            />
        </div>
    )
}

const PriceDataTab = ({ pickupData }) => {
    return (
        <>
            {pickupData.map((data, index) => {
                const headingIcon = <TourIcon sx={{ color: 'primary.main' }} />
                const tableDataRows = getTableRowData(data)
                const details = (
                    <LocationDetails
                        pickupPoint={data.pickup_location}
                        pickupTime={data.arrival_timing}
                        departureTime={data.departure_timing}
                        tableDataRows={tableDataRows}
                    />
                )

                return (
                    <div sx={{ marginBottom: '10%' }}>
                        <CustomAccordionTab
                            heading={data.pickup_point}
                            pickupDetail={details}
                            headingIcon={headingIcon}
                            index={index}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default PriceDataTab
