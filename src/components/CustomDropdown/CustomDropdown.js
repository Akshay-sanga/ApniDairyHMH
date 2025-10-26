import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Animated,
    ScrollView,
    Dimensions,
} from 'react-native';
import AntDesign from '@react-native-vector-icons/ant-design';
import { RFValue } from 'react-native-responsive-fontsize';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const CustomDropdown = ({
    data = [],
    placeholder = 'Select an option...',
    onSelect,
    value,
    style,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(rotateValue, {
            toValue: isOpen ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    useEffect(() => {
        if (value && data && data.length > 0) {
            const item = data.find(d => d.value === value);
            if (item) {
                setSelectedItem(item);
            }
        }
    }, [value, data]);

    const handleSelect = (item) => {
        console.log('✅ Item selected:', item.label);
        setSelectedItem(item);
        setIsOpen(false);
        if (onSelect) {
            onSelect(item);
        }
    };

    const handleClose = () => {
        console.log('🔴 Closing modal');
        setIsOpen(false);
    };

    return (
        <View style={[styles.container, style]}>
            {/* Dropdown Trigger */}
            <TouchableOpacity
                style={[styles.dropdown, isOpen && styles.dropdownOpen]}
                onPress={() => {
                    console.log('🔽 Dropdown clicked');
                    setIsOpen(true);
                }}
                activeOpacity={0.8}
            >
                <Text
                    style={[
                        styles.dropdownText,
                        !selectedItem && styles.placeholderText,
                    ]}
                >
                    {selectedItem ? selectedItem.label : placeholder}
                </Text>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <AntDesign
                        name="down"
                        size={14}
                        color={isOpen ? '#111C43' : '#666'}
                    />
                </Animated.View>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={handleClose}
            >
                <View style={styles.modalWrapper}>
                    {/* Backdrop - Only this closes modal */}
                    <TouchableOpacity
                        style={styles.backdrop}
                        activeOpacity={1}
                        onPress={handleClose}
                    />

                    {/* Content - Prevents touch passthrough */}
                    <View style={styles.centeredView}>
                        <View style={styles.modalContent}>
                            {/* Header */}
                            <View style={styles.header}>
                                <Text style={styles.headerText}>
                                    Select Admin ({data?.length || 0})
                                </Text>
                                <TouchableOpacity
                                    onPress={handleClose}
                                    style={styles.closeBtn}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <AntDesign name="close" size={24} color="#333" />
                                </TouchableOpacity>
                            </View>

                            {/* Scrollable List */}
                            <ScrollView
                                style={styles.scrollView}
                                contentContainerStyle={styles.scrollContent}
                                showsVerticalScrollIndicator={true}
                            >
                                {data && data.length > 0 ? (
                                    data.map((item, index) => {
                                        console.log(`📋 Rendering item ${index}:`, item.label);
                                        return (
                                            <TouchableOpacity
                                                key={item.value || index}
                                                style={[
                                                    styles.item,
                                                    selectedItem?.value === item.value && styles.selectedItem,
                                                ]}
                                                onPress={() => handleSelect(item)}
                                                activeOpacity={0.7}
                                            >
                                                <Text style={styles.itemText}>
                                                    {item.label}
                                                </Text>
                                                {selectedItem?.value === item.value && (
                                                    <AntDesign name="check" size={20} color="#111C43" />
                                                )}
                                            </TouchableOpacity>
                                        );
                                    })
                                ) : (
                                    <View style={styles.emptyView}>
                                        <Text style={styles.emptyText}>No admins available</Text>
                                    </View>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    dropdownOpen: {
        borderColor: '#111C43',
        borderWidth: 2,
    },
    dropdownText: {
        fontSize: RFValue(13),
        color: '#333',
        flex: 1,
    },
    placeholderText: {
        color: '#999',
    },
    modalWrapper: {
        flex: 1,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContent: {
        width: '100%',
        maxHeight: SCREEN_HEIGHT * 0.6,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    headerText: {
        fontSize: RFValue(16),
        fontWeight: '700',
        color: '#111C43',
    },
    closeBtn: {
        padding: 4,
    },
    scrollView: {
        maxHeight: SCREEN_HEIGHT * 0.5,
    },
    scrollContent: {
        paddingBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#FFFFFF',
    },
    selectedItem: {
        backgroundColor: '#e3f2fd',
    },
    itemText: {
        fontSize: RFValue(14),
        color: '#333',
        flex: 1,
        paddingRight: 10,
    },
    emptyView: {
        padding: 40,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: RFValue(14),
        color: '#999',
    },
});

export default CustomDropdown;
