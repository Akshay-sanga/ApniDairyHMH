import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import { screenHeight, screenWidth } from '../../utils/context'
import { RFValue } from 'react-native-responsive-fontsize'
import AntDesign from '@react-native-vector-icons/ant-design'

const HomeScreen = () => {
    const tableData = [
        { id: '1', name: 'John', age: '28', city: 'New York' },
        { id: '2', name: 'Sarah', age: '32', city: 'London' },
        { id: '3', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '4', name: 'John', age: '28', city: 'New York' },
        { id: '5', name: 'Sarah', age: '32', city: 'London' },
        { id: '6', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '7', name: 'John', age: '28', city: 'New York' },
        { id: '8', name: 'Sarah', age: '32', city: 'London' },
        { id: '9', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '10', name: 'John', age: '28', city: 'New York' },
        { id: '11', name: 'Sarah', age: '32', city: 'London' },
        { id: '12', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '13', name: 'John', age: '28', city: 'New York' },
        { id: '14', name: 'Sarah', age: '32', city: 'London' },
        { id: '15', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '16', name: 'John', age: '28', city: 'New York' },
        { id: '17', name: 'Sarah', age: '32', city: 'London' },
        { id: '18', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '19', name: 'John', age: '28', city: 'New York' },
        { id: '20', name: 'Sarah', age: '32', city: 'London' },
        { id: '21', name: 'Mike', age: '25', city: 'Tokyo' },
        { id: '22', name: 'John', age: '28', city: 'New York' },
        { id: '23', name: 'Sarah', age: '32', city: 'London' },
        { id: '24', name: 'Mike', age: '25', city: 'Tokyo' },
    ]

    const TableHeader = () => (
        <View style={styles.tableHeader}>
            <Text style={[styles.columnHeader, styles.column1]}>Name</Text>
            <Text style={[styles.columnHeader, styles.column2]}>Age</Text>
            <Text style={[styles.columnHeader, styles.column3]}>City</Text>
        </View>
    );
    const TableRow = ({ item }) => (
        <View style={styles.tableRow}>
            <Text style={[styles.columnRowTxt, styles.column1]}>{item.name}</Text>
            <Text style={[styles.columnRowTxt, styles.column2]}>{item.age}</Text>
            <Text style={[styles.columnRowTxt, styles.column3]}>{item.city}</Text>
        </View>
    );

    return (
        <>
            <View style={{ flex: 1 }}>
                <HomeHeader />
                <ScrollView style={styles.container}>
                    {/* Banner Section Start */}
                    <View style={styles.banner}>
                        <Image source={require('../../image/Banner/HeroBgBanner.png')} style={{
                            width: '100%', height: '100%', borderRadius: screenWidth * 2,
                        }} />
                    </View>
                    {/* Banner Section End */}

                    {/* Milk Collection Table start */}
                    <View style={styles.milkCollectionTable}>
                        <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: RFValue(14), color: '#111C43', padding: screenHeight * 0.7 }}>Milk <Text style={{
                            textAlign: 'center', fontWeight: '400', fontSize: RFValue(14),
                        }}>Collection Table <AntDesign name='table' size={20} />
                        </Text>
                        </Text>

                        {/* Table */}
                        <TableHeader />
                        <FlatList
                            data={tableData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <TableRow item={item}

                            />}
                        />
                    </View>
                    {/* Milk Collection Table end */}

                </ScrollView>
                <Footer />


            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create(
    {
        container: {
            // flex: 1,
            // borderWidth: 2,
            // borderColor: 'red'

        },
        banner: {
            width: '98%',
            justifyContent: 'center',
            alignSelf: 'center',
            padding: screenHeight * 0.5,
            height: screenHeight * 25,
            // borderBottomColor: '#cfcdcdff',
            // borderBottomWidth: 1,
            // borderRadius: screenWidth * 2,
        },
        milkCollectionTable: {
            width: '100%',
            padding: screenWidth * 3
        },
        tableHeader: {
            flexDirection: 'row',
            backgroundColor: '#111C43',
            paddingVertical: 12,
            paddingHorizontal: 8,
            color: 'white'
        },
        tableRow: {
            flexDirection: 'row',
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
        },
        columnHeader: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 14,
        }, columnRowTxt: {
            fontSize: 14,
            color: '#333',
        },
        column1: {
            width: '40%',
        },
        column2: {
            width: '20%',
        },
        column3: {
            width: '40%',
        },
    }
)