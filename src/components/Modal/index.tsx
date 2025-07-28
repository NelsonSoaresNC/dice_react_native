import Colors from "../../../constants/Colors";
import Button from "../Button";
import { styles } from "./styles";
import { Modal, ModalProps, View, Text } from "react-native";

type MyModalProps = ModalProps & {
     visible: boolean;
  onCancel: () => void;
  onSameValues: () => void;
  onNewValues: () => void;
}

export default function ({
  visible,
  onCancel,
  onSameValues,
  onNewValues,
}: MyModalProps) {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>How are you want to play again?</Text>
                <Button title="Same Values" onPress={onSameValues}/>
                <Button title="New Values" onPress={onNewValues} backcolor={Colors.gradientColor1} />
                <Button title="Cancel" onPress={onCancel} backcolor="red"/>
            </View>
        </Modal>
    );
}